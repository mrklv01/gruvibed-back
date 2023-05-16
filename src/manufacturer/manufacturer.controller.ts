import { Controller, Get, Param, Delete, Body } from '@nestjs/common';
import { ManufacturerService } from './manufacturer.service';

@Controller('manufacturer')
export class ManufacturerController {
  constructor(private readonly manufacturerService: ManufacturerService) { }

  @Get('all')
  async getAll() {
    return await this.manufacturerService.getAll()
  }

  @Get('by/:id')
  async getById(@Param('id') id: number) {
    return await this.manufacturerService.getById(id)
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: number) {
    return await this.manufacturerService.delete(id)
  }

  @Delete('create')
  async create(@Body() name: string) {
    return await this.manufacturerService.create(name)
  }
}
