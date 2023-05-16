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
exports.AuthService = void 0;
const prisma_service_1 = require("./../../prisma.service");
const common_1 = require("@nestjs/common");
const argon2_1 = require("argon2");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(prisma, jwt) {
        this.prisma = prisma;
        this.jwt = jwt;
    }
    async register(dto) {
        const oldUser = await this.prisma.user.findUnique({ where: { email: dto.email } });
        if (oldUser)
            throw new common_1.BadRequestException("Такой пользователь уже существует");
        const user = await this.prisma.user.create({ data: { email: dto.email, login: dto.login, avatarPath: dto.avatarPath, phone: dto.phone, password: await (0, argon2_1.hash)(dto.password), } });
        const tokens = await this.createToken(user.id, user.email);
        return Object.assign({ user: await this.returnUserFields(user) }, tokens);
    }
    async login(dto) {
        const currentUser = await this.prisma.user.findUnique({ where: { email: dto.email } });
        if (!currentUser)
            throw new common_1.BadRequestException('Пользователя нет с такими данными');
        const checkPassword = await (0, argon2_1.verify)(currentUser.password, dto.password);
        if (!checkPassword)
            throw new common_1.BadRequestException('Невверный пароль');
        const tokens = await this.createToken(currentUser.id, currentUser.email);
        return Object.assign({ user: await this.returnUserFields(currentUser) }, tokens);
    }
    async updateToken(dto) {
        const result = await this.jwt.verifyAsync(dto.refreshToken);
        if (!result)
            throw new common_1.UnauthorizedException('Invalid refresh token');
        const user = await this.prisma.user.findUnique({ where: { id: result.id } });
        const tokens = await this.createToken(user.id, user.email);
        return Object.assign({ user: await this.returnUserFields(user) }, tokens);
    }
    async createToken(userId, email) {
        const data = {
            id: userId,
            email
        };
        const accessToken = this.jwt.sign(data, {
            expiresIn: '1h',
        });
        const refreshToken = this.jwt.sign(data, {
            expiresIn: '7d',
        });
        return { accessToken, refreshToken };
    }
    async returnUserFields(user) {
        return {
            id: user.id,
            email: user.email,
            isAdmin: user.isAdmin
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map