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
exports.OrderService = void 0;
const prisma_service_1 = require("../../prisma.service");
const common_1 = require("@nestjs/common");
let OrderService = class OrderService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getOrCreateOrder(userId) {
        const order = await this.prisma.order.findFirst({
            where: {
                userId: userId,
            },
        });
        if (order && (order === null || order === void 0 ? void 0 : order.status) !== 'FINISH') {
            return order;
        }
        return await this.prisma.order.create({
            data: { userId, status: 'PENDING' },
        });
    }
    async getOrder(userId) {
        return await this.prisma.order.findMany({
            where: {
                userId,
            },
        });
    }
    async getOrderItemById(orderId) {
        return await this.prisma.orderItem.findMany({
            where: {
                orderId,
            },
            include: { product: true },
        });
    }
    async createOrderItem(productId, orderId, count) {
        return await this.prisma.orderItem.create({
            data: { productId: productId, orderId: orderId, price: 0, count: count },
            select: { orderId: true },
        });
    }
    async finishOrder(orderId) {
        return await this.prisma.order.update({ where: { id: orderId }, data: { status: 'FINISH' } });
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map