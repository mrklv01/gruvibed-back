import { PrismaService } from './../prisma.service';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prismaService = app.get(PrismaService)
  await prismaService.enableShutdownHooks(app)
  app.enableCors()
  app.setGlobalPrefix('api')
  await app.listen(8080);
}
bootstrap();
