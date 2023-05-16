import { Controller, Get, Param } from '@nestjs/common';
import { Body, Delete, Patch, Post } from '@nestjs/common/decorators';
import { Auth } from 'src/decorators/auth.decorator';
import { ProductDto } from './product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Get('all')
  async getAll() {
    return await this.productService.getAll()
  }

  @Get('by/:id')
  async getById(@Param('id') id: number) {
    return await this.productService.getById(+id)
  }



  //Админка
  @Auth('admin')
  @Get('admin/all')
  async getAllByAdmin() {
    return await this.productService.getAll()
  }

  @Auth('admin')
  @Get('count')
  async getCount() {
    return await this.productService.count()
  }

  @Auth('admin')
  @Post('admin/create')
  async createProduct(@Body() dto: ProductDto) {
    return await this.productService.createProduct(dto)
  }

  @Auth('admin')
  @Patch('admin/update/:id')
  async updateProduct(@Param('id') id: number, @Body() dto: ProductDto) {
    return await this.productService.updateProduct(dto, +id)
  }


  @Auth('admin')
  @Delete('admin/delete/:id')
  async deleteProduct(@Param('id') id: number) {
    return await this.productService.deleteProduct(+id)
  }

}
