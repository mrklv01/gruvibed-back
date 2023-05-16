import { Controller, Get, Param, Post, Body, Patch } from '@nestjs/common'
import { Auth } from 'src/decorators/auth.decorator'
import { CurrentUser } from 'src/decorators/user.decorator'
import { OrderService } from './order.service'

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('create')
  @Auth('user')
  async getOrCreateOrder(@CurrentUser('id') id: number) {
    return await this.orderService.getOrCreateOrder(id)
  }

  @Get('all')
  @Auth('user')
  async getOrder(@CurrentUser('id') id: number) {
    return await this.orderService.getOrder(id)
  }

  @Get('orderItem/byId/:id')
  @Auth('user')
  async getOrderItem(@Param('id') id: number) {
    return await this.orderService.getOrderItemById(+id)
  }

  getOrderItemById

  @Post('orderitem/:orderId')
  async createOrderItem(
    @Body('productId') productId: number,
    @Body('count') count: number,
    @Param('orderId') orderId: number,
  ) {
    return await this.orderService.createOrderItem(Number(productId), +orderId, +count)
  }

  @Patch('update-status/:orderId')
  async finishOrder(@Param('orderId') orderId: number) {
    return await this.orderService.finishOrder(+orderId)
  }
}
