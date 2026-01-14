import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './order.schema';

@Injectable()
export class OrdersService {

    constructor(
        @InjectModel(Order.name) private orderModel: Model<Order>,
    ) { }


    async createOrder(userId: any, order: any) {
        order.user = userId
        //return await this.orderModel.create(order);
        const createdOrder = new this.orderModel(order);
        return createdOrder.save();
    }

    async findAllOrdersByUser(userId) {
        return await this.orderModel.find({ user: userId }).populate('products').exec();
    }

    async findOrderById(orderId) {
        return await this.orderModel.findById(orderId);
    }

    async removeById(orderId) {
        return await this.orderModel.findByIdAndDelete(orderId);
    }

    async payById(id, isPaid: boolean){
         return await this.orderModel.findByIdAndUpdate(id, { $set: { isPaid: isPaid } }, { new: true });
    }

    
}
