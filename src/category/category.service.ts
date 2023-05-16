import { CategoryDto } from './category.dto';
import { PrismaService } from 'prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
    constructor(private prisma: PrismaService) { }
    async getCategoryById(id: number) {
        return await this.prisma.category.findUnique({ where: { id }, include: { children: true } })
    }

    async getAll() {
        return await this.prisma.category.findMany({ where: { parentId: null }, include: { children: true } })
    }

    async getCount() {
        return (await this.getAll()).length
    }

    async createCategory(dto: CategoryDto) {
        return await this.prisma.category.create({ data: { name: dto.name, parentId: dto.parentId } })
    }

    async deleteCategory(id: number) {
        return await this.prisma.category.delete({ where: { id } })
    }

    async updateCategory(id: number, dto: CategoryDto) {
        return await this.prisma.category.update({ where: { id }, data: { name: dto.name, parentId: dto.parentId } })
    }

}
