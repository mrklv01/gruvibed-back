import { PrismaService } from './../../prisma.service';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { TokenDto } from './dto/token.dto';
export declare class AuthService {
    private prisma;
    private jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
    register(dto: AuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: number;
            email: string;
            isAdmin: boolean;
        };
    }>;
    login(dto: AuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: number;
            email: string;
            isAdmin: boolean;
        };
    }>;
    updateToken(dto: TokenDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: number;
            email: string;
            isAdmin: boolean;
        };
    }>;
    createToken(userId: number, email: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    returnUserFields(user: User): Promise<{
        id: number;
        email: string;
        isAdmin: boolean;
    }>;
}
