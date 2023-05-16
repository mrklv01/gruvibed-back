import { Delete } from '@nestjs/common/decorators';
import { CategoryDto } from './category.dto';
import { Body, Controller, Get, Param, Post, Patch } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Auth } from 'src/decorators/auth.decorator';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Get('by/:id')
  async getById(@Param('id') id: number) {
    return await this.categoryService.getCategoryById(+id)
  }

  @Get('all')
  async getAll() {
    return await this.categoryService.getAll()
  }

  @Auth('admin')
  @Get('count')
  async getCount() {
    return await this.categoryService.getCount()
  }

  @Auth('admin')
  @Post('create')
  async createCategory(@Body() dto: CategoryDto) {
    return await this.categoryService.createCategory(dto)
  }

  @Auth('admin')
  @Delete('delete/:id')
  async deleteCategory(@Param('id') id: number) {
    return await this.categoryService.deleteCategory(id)
  }

  @Auth('admin')
  @Patch('update/:id')
  async updateCategory(@Param('id') id: number, @Body() dto: CategoryDto) {
    return await this.categoryService.updateCategory(id, dto)
  }
}
