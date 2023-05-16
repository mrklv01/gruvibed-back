import { ProductDto } from './product.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getAll(): Promise<import(".prisma/client").Product[]>;
    getById(id: number): Promise<import(".prisma/client").Product>;
    getAllByAdmin(): Promise<import(".prisma/client").Product[]>;
    getCount(): Promise<number>;
    createProduct(dto: ProductDto): Promise<import(".prisma/client").Product>;
    updateProduct(id: number, dto: ProductDto): Promise<import(".prisma/client").Product>;
    deleteProduct(id: number): Promise<import(".prisma/client").Product>;
}
