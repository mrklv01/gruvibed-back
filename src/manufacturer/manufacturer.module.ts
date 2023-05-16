import { Module } from '@nestjs/common';
import { ManufacturerService } from './manufacturer.service';
import { ManufacturerController } from './manufacturer.controller';
import { PrismaService } from 'prisma.service';

@Module({
  controllers: [ManufacturerController],
  providers: [ManufacturerService, PrismaService]
})
export class ManufacturerModule { }
