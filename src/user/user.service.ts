import { PasswordDto } from './dto/password.dto'
import { hash } from 'argon2'
import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from 'prisma.service'
import { UserDto } from './dto/user.dto'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async getById(id: number, selectObject: Prisma.UserSelect = {}) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        login: true,
        name: true,
        favorite: { select: { productId: true, userId: true, id: true } },
        phone: true,
        address: true,
        isAdmin: true,
        ...selectObject,
      },
    })
    if (!user) throw new UnauthorizedException('Вы не авторизованы')
    return user
  }

  async updateProfile(id: number, dto: UserDto) {
    const isSameUser = await this.prisma.user.findUnique({ where: { email: dto.email } })

    if (isSameUser && id !== isSameUser.id) throw new BadRequestException('Email already in use')
    const user = await this.getById(id)

    return this.prisma.user.update({
      where: {
        id,
      },
      data: {
        email: dto.email,
        avatarPath: dto.avatarPath,
        login: dto.login,
        password: dto.password ? await hash(dto.password) : user.password,
        phone: dto.phone,
        address: dto.address,
        name: dto.name,
      },
    })
  }

  async toggleFavorite(userId: number, productId: number) {
    const user = await this.getById(userId)

    const check = user.favorite.some(
      product => product.userId == userId && product.productId == productId,
    )

    const fid = user.favorite.find(
      product => product.userId == userId && product.productId == productId,
    )
    if (check) {
      await this.prisma.favorite.delete({ where: { id: fid.id } })
    } else {
      await this.prisma.favorite.create({ data: { productId, userId } })
    }
  }

  async deleteUser(id: number) {
    return await this.prisma.user.delete({ where: { id } })
  }

  async count() {
    return (await this.prisma.user.findMany()).length
  }

  async updateUser(dto: UserDto, id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        password: true,
      },
    })
    return await this.prisma.user.update({
      where: { id: id },
      data: {
        email: dto.email,
        login: dto.login,
        phone: dto.phone,
        password: dto.password ? await hash(dto.password) : user.password,
      },
    })
  }

  async getAll() {
    return await this.prisma.user.findMany()
  }

  // async changePassword(id: number, dto: PasswordDto) {
  //   return await this.prisma.user.update({ where: { id }, data: { password: await hash(dto.newPassword) } })
  // }
}
