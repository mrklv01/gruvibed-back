import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma.service';
import { UserDto } from './dto/user.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    getById(id: number, selectObject?: Prisma.UserSelect): Promise<{
        createdAt?: Date;
        updatedAt?: Date;
        review?: import(".prisma/client").Review[];
        favorite: import(".prisma/client").Favorite[];
        id: number;
        email: string;
        login: string;
        password?: string;
        avatarPath?: string;
        phone: string;
        name: string;
        address: string;
        isAdmin: boolean;
        Order?: import(".prisma/client").Order[];
        _count?: Prisma.UserCountOutputType;
    }>;
    updateProfile(id: number, dto: UserDto): Promise<import(".prisma/client").User>;
    toggleFavorite(userId: number, productId: number): Promise<void>;
    deleteUser(id: number): Promise<import(".prisma/client").User>;
    count(): Promise<number>;
    updateUser(dto: UserDto, id: number): Promise<import(".prisma/client").User>;
    getAll(): Promise<import(".prisma/client").User[]>;
}
