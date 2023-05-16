import { CategoryDto } from './category.dto';
import { PrismaService } from 'prisma.service';
export declare class CategoryService {
    private prisma;
    constructor(prisma: PrismaService);
    getCategoryById(id: number): Promise<import(".prisma/client").Category & {
        children: import(".prisma/client").Category[];
    }>;
    getAll(): Promise<(import(".prisma/client").Category & {
        children: import(".prisma/client").Category[];
    })[]>;
    getCount(): Promise<number>;
    createCategory(dto: CategoryDto): Promise<import(".prisma/client").Category>;
    deleteCategory(id: number): Promise<import(".prisma/client").Category>;
    updateCategory(id: number, dto: CategoryDto): Promise<import(".prisma/client").Category>;
}
