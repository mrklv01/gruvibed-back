"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_service_1 = require("./../prisma.service");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const prismaService = app.get(prisma_service_1.PrismaService);
    await prismaService.enableShutdownHooks(app);
    app.enableCors();
    app.setGlobalPrefix('api');
    await app.listen(8080);
}
bootstrap();
//# sourceMappingURL=main.js.map