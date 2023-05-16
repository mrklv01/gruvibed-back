import { ManufacturerService } from './manufacturer.service';
export declare class ManufacturerController {
    private readonly manufacturerService;
    constructor(manufacturerService: ManufacturerService);
    getAll(): Promise<import(".prisma/client").Manufacturer[]>;
    getById(id: number): Promise<import(".prisma/client").Manufacturer>;
    delete(id: number): Promise<import(".prisma/client").Manufacturer>;
    create(name: string): Promise<import(".prisma/client").Manufacturer>;
}
