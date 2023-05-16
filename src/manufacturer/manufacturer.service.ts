import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma.service';

@Injectable()
export class ManufacturerService {
    constructor(private readonly prisma: PrismaService) { }

    //Admin Pages
    async getAll() {
        return await this.prisma.manufacturer.findMany()
    }


    async create(name: string) {
        return await this.prisma.manufacturer.create({ data: { name: name } })
    }

    async delete(id: number) {
        return await this.prisma.manufacturer.delete({ where: { id } })
    }

    async getById(id: number) {
        return await this.prisma.manufacturer.findUnique({ where: { id } })
    }
}
