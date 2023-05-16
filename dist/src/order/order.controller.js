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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../decorators/auth.decorator");
const user_decorator_1 = require("../decorators/user.decorator");
const order_service_1 = require("./order.service");
let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    async getOrCreateOrder(id) {
        return await this.orderService.getOrCreateOrder(id);
    }
    async getOrder(id) {
        return await this.orderService.getOrder(id);
    }
    async getOrderItem(id) {
        return await this.orderService.getOrderItemById(+id);
    }
    async createOrderItem(productId, count, orderId) {
        return await this.orderService.createOrderItem(Number(productId), +orderId, +count);
    }
    async finishOrder(orderId) {
        return await this.orderService.finishOrder(+orderId);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    (0, auth_decorator_1.Auth)('user'),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOrCreateOrder", null);
__decorate([
    (0, common_1.Get)('all'),
    (0, auth_decorator_1.Auth)('user'),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOrder", null);
__decorate([
    (0, common_1.Get)('orderItem/byId/:id'),
    (0, auth_decorator_1.Auth)('user'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOrderItem", null);
__decorate([
    (0, common_1.Post)('orderitem/:orderId'),
    __param(0, (0, common_1.Body)('productId')),
    __param(1, (0, common_1.Body)('count')),
    __param(2, (0, common_1.Param)('orderId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "createOrderItem", null);
__decorate([
    (0, common_1.Patch)('update-status/:orderId'),
    __param(0, (0, common_1.Param)('orderId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "finishOrder", null);
OrderController = __decorate([
    (0, common_1.Controller)('order'),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map