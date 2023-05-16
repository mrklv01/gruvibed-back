import { ProductDto } from './product.dto';
import { PrismaService } from './../../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    constructor(private prisma: PrismaService) { }
    async getAll() {
        return await this.prisma.product.findMany()
    }

    async getById(id: number) {
        return await this.prisma.product.findUnique({ where: { id } })

    }

    async createProduct(dto: ProductDto) {
        return await this.prisma.product.create({ data: { slug: dto.slug, articul: dto.articul, capacity: dto.capacity, caseMaterial: dto.caseMaterial, collection: dto.collection, color: dto.color, cornerLocation: dto.cornerLocation, description: dto.description, design: dto.design, filler: dto.filler, frameMaterial: dto.frameMaterial, hardnessLevel: dto.hardnessLevel, legColor: dto.legColor, legMaterial: dto.legMaterial, manufacturer: dto.manufacturer, price: dto.price, priceWithDiscount: dto.priceWithDiscount, shape: dto.shape, size: dto.size, springBlock: dto.springBlock, title: dto.title, transformationMechanism: dto.transformationMechanism, upholsteryMaterial: dto.upholsteryMaterial } })
    }

    async updateProduct(dto: ProductDto, id: number) {
        // return await this.prisma.product.create({ data: { slug: dto.slug, articul: dto.articul, capacity: dto.capacity, caseMaterial: dto.caseMaterial, collection: dto.collection, color: dto.color, cornerLocation: dto.cornerLocation, description: dto.description, design: dto.design, filler: dto.filler, frameMaterial: dto.frameMaterial, hardnessLevel: dto.hardnessLevel, legColor: dto.legColor, legMaterial: dto.legMaterial, manufacturer: dto.manufacturer, price: dto.price, priceWithDiscount: dto.priceWithDiscount, shape: dto.shape, size: dto.size, springBlock: dto.springBlock, title: dto.title, transformationMechanism: dto.transformationMechanism, upholsteryMaterial: dto.upholsteryMaterial } })
        return await this.prisma.product.update({ where: { id: id }, data: { slug: dto.slug, articul: dto.articul, capacity: dto.capacity, caseMaterial: dto.caseMaterial, collection: dto.collection, color: dto.color, cornerLocation: dto.cornerLocation, description: dto.description, design: dto.design, filler: dto.filler, frameMaterial: dto.frameMaterial, hardnessLevel: dto.hardnessLevel, legColor: dto.legColor, legMaterial: dto.legMaterial, manufacturer: dto.manufacturer, price: dto.price, priceWithDiscount: dto.priceWithDiscount, shape: dto.shape, size: dto.size, springBlock: dto.springBlock, title: dto.title, transformationMechanism: dto.transformationMechanism, upholsteryMaterial: dto.upholsteryMaterial } })
    }

    async deleteProduct(id: number) {
        return await this.prisma.product.delete({ where: { id } })
    }

    async count() {
        return (await this.getAll()).length
    }
}
