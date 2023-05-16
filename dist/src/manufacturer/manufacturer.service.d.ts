import { PrismaService } from 'prisma.service';
export declare class ManufacturerService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<import(".prisma/client").Manufacturer[]>;
    create(name: string): Promise<import(".prisma/client").Manufacturer>;
    delete(id: number): Promise<import(".prisma/client").Manufacturer>;
    getById(id: number): Promise<import(".prisma/client").Manufacturer>;
}
