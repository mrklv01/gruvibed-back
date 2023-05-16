import { PrismaService } from './../../prisma.service';
import { Module } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { FavoriteController } from './favorite.controller';

@Module({
  controllers: [FavoriteController],
  providers: [FavoriteService, PrismaService]
})
export class FavoriteModule { }
