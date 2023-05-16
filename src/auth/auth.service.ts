import { PrismaService } from './../../prisma.service';
import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { hash, verify } from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { TokenDto } from './dto/token.dto';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwt: JwtService) { }
    async register(dto: AuthDto) {
        const oldUser = await this.prisma.user.findUnique({ where: { email: dto.email } })

        if (oldUser) throw new BadRequestException("Такой пользователь уже существует")

        const user = await this.prisma.user.create({ data: { email: dto.email, login: dto.login, avatarPath: dto.avatarPath, phone: dto.phone, password: await hash(dto.password), } })

        const tokens = await this.createToken(user.id, user.email)
        return {
            user: await this.returnUserFields(user),
            ...tokens
        }

    }



    async login(dto: AuthDto) {
        const currentUser = await this.prisma.user.findUnique({ where: { email: dto.email } })

        if (!currentUser) throw new BadRequestException('Пользователя нет с такими данными')

        const checkPassword = await verify(currentUser.password, dto.password)

        if (!checkPassword) throw new BadRequestException('Невверный пароль')

        const tokens = await this.createToken(currentUser.id, currentUser.email)

        return {
            user: await this.returnUserFields(currentUser),
            ...tokens
        }
    }


    async updateToken(dto: TokenDto) {
        const result = await this.jwt.verifyAsync(dto.refreshToken)

        if (!result) throw new UnauthorizedException('Invalid refresh token')

        const user = await this.prisma.user.findUnique({ where: { id: result.id } })

        const tokens = await this.createToken(user.id, user.email);

        return {
            user: await this.returnUserFields(user),
            ...tokens
        }
    }


    async createToken(userId: number, email: string) {
        const data = {
            id: userId,
            email
        }

        const accessToken = this.jwt.sign(data, {
            expiresIn: '1h',
        })

        const refreshToken = this.jwt.sign(data, {
            expiresIn: '7d',
        })

        return { accessToken, refreshToken }
    }


    async returnUserFields(user: User) {
        return {
            id: user.id,
            email: user.email,
            isAdmin: user.isAdmin
        }
    }


}
