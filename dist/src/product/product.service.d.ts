import { ProductDto } from './product.dto';
import { PrismaService } from './../../prisma.service';
export declare class ProductService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<import(".prisma/client").Product[]>;
    getById(id: number): Promise<import(".prisma/client").Product>;
    createProduct(dto: ProductDto): Promise<import(".prisma/client").Product>;
    updateProduct(dto: ProductDto, id: number): Promise<import(".prisma/client").Product>;
    deleteProduct(id: number): Promise<import(".prisma/client").Product>;
    count(): Promise<number>;
}
