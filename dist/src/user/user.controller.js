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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const auth_decorator_1 = require("../decorators/auth.decorator");
const user_decorator_1 = require("../decorators/user.decorator");
const user_dto_1 = require("./dto/user.dto");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async getProfile(id) {
        return await this.userService.getById(id);
    }
    async updateProfile(id, dto) {
        return await this.userService.updateProfile(id, dto);
    }
    async toggleFavorite(id, productId) {
        return await this.userService.toggleFavorite(id, +productId);
    }
    async getProfileById(id) {
        return await this.userService.getById(+id);
    }
    async deleteUser(id) {
        return await this.userService.deleteUser(+id);
    }
    async getCount() {
        return await this.userService.count();
    }
    async getAll() {
        return await this.userService.getAll();
    }
    async updateUser(id, dto) {
        return await this.userService.updateUser(dto, +id);
    }
};
__decorate([
    (0, common_1.Get)('profile'),
    (0, auth_decorator_1.Auth)('user'),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getProfile", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Put)('profile/update'),
    (0, auth_decorator_1.Auth)('user'),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)('user'),
    (0, decorators_1.Post)('profile/favorite/:productId'),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Param)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "toggleFavorite", null);
__decorate([
    (0, common_1.Get)('admin/profile/:id'),
    (0, auth_decorator_1.Auth)('admin'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getProfileById", null);
__decorate([
    (0, auth_decorator_1.Auth)('admin'),
    (0, decorators_1.Delete)('admin/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
__decorate([
    (0, auth_decorator_1.Auth)('admin'),
    (0, common_1.Get)('admin/count'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getCount", null);
__decorate([
    (0, auth_decorator_1.Auth)('admin'),
    (0, common_1.Get)('admin/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAll", null);
__decorate([
    (0, auth_decorator_1.Auth)('admin'),
    (0, common_1.Put)('admin/updateAccount/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map