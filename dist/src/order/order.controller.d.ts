import { OrderService } from './order.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    getOrCreateOrder(id: number): Promise<import(".prisma/client").Order>;
    getOrder(id: number): Promise<import(".prisma/client").Order[]>;
    getOrderItem(id: number): Promise<import(".prisma/client").OrderItem[]>;
    getOrderItemById: any;
    createOrderItem(productId: number, count: number, orderId: number): Promise<{
        orderId: number;
    }>;
    finishOrder(orderId: number): Promise<import(".prisma/client").Order>;
}
