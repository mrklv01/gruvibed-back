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
exports.ManufacturerController = void 0;
const common_1 = require("@nestjs/common");
const manufacturer_service_1 = require("./manufacturer.service");
let ManufacturerController = class ManufacturerController {
    constructor(manufacturerService) {
        this.manufacturerService = manufacturerService;
    }
    async getAll() {
        return await this.manufacturerService.getAll();
    }
    async getById(id) {
        return await this.manufacturerService.getById(id);
    }
    async delete(id) {
        return await this.manufacturerService.delete(id);
    }
    async create(name) {
        return await this.manufacturerService.create(name);
    }
};
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ManufacturerController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('by/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ManufacturerController.prototype, "getById", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ManufacturerController.prototype, "delete", null);
__decorate([
    (0, common_1.Delete)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ManufacturerController.prototype, "create", null);
ManufacturerController = __decorate([
    (0, common_1.Controller)('manufacturer'),
    __metadata("design:paramtypes", [manufacturer_service_1.ManufacturerService])
], ManufacturerController);
exports.ManufacturerController = ManufacturerController;
//# sourceMappingURL=manufacturer.controller.js.map