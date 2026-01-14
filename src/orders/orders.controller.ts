import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('orders')
@UseGuards(AuthGuard)
export class OrdersController {

    constructor(private orderService: OrdersService){}

    @Get("/all/user/:userId")
    async getAllOrdersByUser(@Param("userId") userId: any) {
        return await this.orderService.findAllOrdersByUser(userId);
    }

    @Get("/:id")
    async getOrderById(@Param("id") id: any) {
        return await this.orderService.findOrderById(id);
    }

    @Patch("/pay/:id")
    async payOrderById(@Param("id") id: any, @Body() order: { isPaid: boolean }) {
        return await this.orderService.payById(id, order.isPaid);
    }

    @Delete("/:orderId")
    async removeOrder(@Param("orderId") orderId: any) {
        return await this.orderService.removeById(orderId);
    }
}
