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
exports.FilesController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const file_upload_1 = require("../utils/file-upload");
let FilesController = class FilesController {
    constructor() { }
    async uploadedFile(file) {
        const response = {
            originalname: file.originalname,
            filename: file.filename,
        };
        return {
            status: common_1.HttpStatus.OK,
            message: 'Image uploaded successfully!',
            data: response,
        };
    }
    async uploadMultipleFiles(files) {
        const response = [];
        files.forEach(file => {
            const fileReponse = {
                originalname: file.originalname,
                filename: file.filename,
            };
            response.push(fileReponse);
        });
        return {
            status: common_1.HttpStatus.OK,
            message: 'Images uploaded successfully!',
            data: response,
        };
    }
    getImage(image, res) {
        const response = res.sendFile(image, { root: './uploads' });
        return {
            status: common_1.HttpStatus.OK,
            data: response,
        };
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: file_upload_1.editFileName,
        }),
        fileFilter: file_upload_1.imageFileFilter,
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "uploadedFile", null);
__decorate([
    (0, common_1.Post)('uploadMultipleFiles'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('image', 10, {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: file_upload_1.editFileName,
        }),
        fileFilter: file_upload_1.imageFileFilter,
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "uploadMultipleFiles", null);
__decorate([
    (0, common_1.Get)(':imagename'),
    __param(0, (0, common_1.Param)('imagename')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "getImage", null);
FilesController = __decorate([
    (0, common_1.Controller)('files'),
    __metadata("design:paramtypes", [])
], FilesController);
exports.FilesController = FilesController;
//# sourceMappingURL=files.controller.js.map