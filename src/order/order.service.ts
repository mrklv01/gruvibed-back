import { PrismaService } from 'prisma.service'
import { Injectable } from '@nestjs/common'
import { Order, OrderItem } from '@prisma/client'

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  async getOrCreateOrder(userId: number): Promise<Order> {
    const order = await this.prisma.order.findFirst({
      where: {
        userId: userId,
      },
    })
    if (order && order?.status !== 'FINISH') {
      return order
    }
    return await this.prisma.order.create({
      data: { userId, status: 'PENDING' },
    })
  }

  async getOrder(userId: number): Promise<Order[]> {
    return await this.prisma.order.findMany({
      where: {
        userId,
      },
    })
  }

  async getOrderItemById(orderId: number): Promise<OrderItem[]> {
    return await this.prisma.orderItem.findMany({
      where: {
        orderId,
      },
      include: { product: true },
    })
  }

  async createOrderItem(productId: number, orderId: number, count: number) {
    return await this.prisma.orderItem.create({
      data: { productId: productId, orderId: orderId, price: 0, count: count },
      select: { orderId: true },
    })
  }

  async finishOrder(orderId: number) {
    return await this.prisma.order.update({ where: { id: orderId }, data: { status: 'FINISH' } })
  }
}
