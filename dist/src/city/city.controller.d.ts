import { CityService } from './city.service';
export declare class CityController {
    private readonly cityService;
    constructor(cityService: CityService);
    getAll(): Promise<import(".prisma/client").City[]>;
}
