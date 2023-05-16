import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getProfile(id: number): Promise<{
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
        _count?: import(".prisma/client").Prisma.UserCountOutputType;
    }>;
    updateProfile(id: number, dto: UserDto): Promise<import(".prisma/client").User>;
    toggleFavorite(id: number, productId: string): Promise<void>;
    getProfileById(id: number): Promise<{
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
        _count?: import(".prisma/client").Prisma.UserCountOutputType;
    }>;
    deleteUser(id: number): Promise<import(".prisma/client").User>;
    getCount(): Promise<number>;
    getAll(): Promise<import(".prisma/client").User[]>;
    updateUser(id: number, dto: UserDto): Promise<import(".prisma/client").User>;
}
