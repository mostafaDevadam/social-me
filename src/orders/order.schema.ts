import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { SchemaTypes, Types, model, Schema as MongooseSchema, HydratedDocument  } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema({ timestamps: true })
export class Order {

    @Prop({ required: true })
    total_price: number

    @Prop({ required: false, default: false })
    isPaid: boolean

    @Prop({ type: [MongooseSchema.Types.ObjectId], ref: 'Product', required: true })
    products: MongooseSchema.Types.ObjectId[]

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true, })
    user: MongooseSchema.Types.ObjectId

}

export const OrderSchema = SchemaFactory.createForClass(Order);
