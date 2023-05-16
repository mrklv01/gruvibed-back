"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const prisma_service_1 = require("./../../prisma.service");
const common_1 = require("@nestjs/common");
let ProductService = class ProductService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        return await this.prisma.product.findMany();
    }
    async getById(id) {
        return await this.prisma.product.findUnique({ where: { id } });
    }
    async createProduct(dto) {
        return await this.prisma.product.create({ data: { slug: dto.slug, articul: dto.articul, capacity: dto.capacity, caseMaterial: dto.caseMaterial, collection: dto.collection, color: dto.color, cornerLocation: dto.cornerLocation, description: dto.description, design: dto.design, filler: dto.filler, frameMaterial: dto.frameMaterial, hardnessLevel: dto.hardnessLevel, legColor: dto.legColor, legMaterial: dto.legMaterial, manufacturer: dto.manufacturer, price: dto.price, priceWithDiscount: dto.priceWithDiscount, shape: dto.shape, size: dto.size, springBlock: dto.springBlock, title: dto.title, transformationMechanism: dto.transformationMechanism, upholsteryMaterial: dto.upholsteryMaterial } });
    }
    async updateProduct(dto, id) {
        return await this.prisma.product.update({ where: { id: id }, data: { slug: dto.slug, articul: dto.articul, capacity: dto.capacity, caseMaterial: dto.caseMaterial, collection: dto.collection, color: dto.color, cornerLocation: dto.cornerLocation, description: dto.description, design: dto.design, filler: dto.filler, frameMaterial: dto.frameMaterial, hardnessLevel: dto.hardnessLevel, legColor: dto.legColor, legMaterial: dto.legMaterial, manufacturer: dto.manufacturer, price: dto.price, priceWithDiscount: dto.priceWithDiscount, shape: dto.shape, size: dto.size, springBlock: dto.springBlock, title: dto.title, transformationMechanism: dto.transformationMechanism, upholsteryMaterial: dto.upholsteryMaterial } });
    }
    async deleteProduct(id) {
        return await this.prisma.product.delete({ where: { id } });
    }
    async count() {
        return (await this.getAll()).length;
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map