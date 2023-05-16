import { PrismaService } from 'prisma.service';
import { Order, OrderItem } from '@prisma/client';
export declare class OrderService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getOrCreateOrder(userId: number): Promise<Order>;
    getOrder(userId: number): Promise<Order[]>;
    getOrderItemById(orderId: number): Promise<OrderItem[]>;
    createOrderItem(productId: number, orderId: number, count: number): Promise<{
        orderId: number;
    }>;
    finishOrder(orderId: number): Promise<Order>;
}
