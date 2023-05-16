import { PrismaService } from 'prisma.service';
export declare class CityService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<import(".prisma/client").City[]>;
}
