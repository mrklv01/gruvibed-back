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
exports.UserService = void 0;
const argon2_1 = require("argon2");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getById(id, selectObject = {}) {
        const user = await this.prisma.user.findUnique({
            where: { id },
            select: Object.assign({ id: true, email: true, login: true, name: true, favorite: { select: { productId: true, userId: true, id: true } }, phone: true, address: true, isAdmin: true }, selectObject),
        });
        if (!user)
            throw new common_1.UnauthorizedException('Вы не авторизованы');
        return user;
    }
    async updateProfile(id, dto) {
        const isSameUser = await this.prisma.user.findUnique({ where: { email: dto.email } });
        if (isSameUser && id !== isSameUser.id)
            throw new common_1.BadRequestException('Email already in use');
        const user = await this.getById(id);
        return this.prisma.user.update({
            where: {
                id,
            },
            data: {
                email: dto.email,
                avatarPath: dto.avatarPath,
                login: dto.login,
                password: dto.password ? await (0, argon2_1.hash)(dto.password) : user.password,
                phone: dto.phone,
                address: dto.address,
                name: dto.name,
            },
        });
    }
    async toggleFavorite(userId, productId) {
        const user = await this.getById(userId);
        const check = user.favorite.some(product => product.userId == userId && product.productId == productId);
        const fid = user.favorite.find(product => product.userId == userId && product.productId == productId);
        if (check) {
            await this.prisma.favorite.delete({ where: { id: fid.id } });
        }
        else {
            await this.prisma.favorite.create({ data: { productId, userId } });
        }
    }
    async deleteUser(id) {
        return await this.prisma.user.delete({ where: { id } });
    }
    async count() {
        return (await this.prisma.user.findMany()).length;
    }
    async updateUser(dto, id) {
        const user = await this.prisma.user.findUnique({
            where: { id },
            select: {
                password: true,
            },
        });
        return await this.prisma.user.update({
            where: { id: id },
            data: {
                email: dto.email,
                login: dto.login,
                phone: dto.phone,
                password: dto.password ? await (0, argon2_1.hash)(dto.password) : user.password,
            },
        });
    }
    async getAll() {
        return await this.prisma.user.findMany();
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map