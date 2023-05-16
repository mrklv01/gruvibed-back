import { CategoryDto } from './category.dto';
import { CategoryService } from './category.service';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    getById(id: number): Promise<import(".prisma/client").Category & {
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
