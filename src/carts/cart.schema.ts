import { Prop, Schema, SchemaFactory, } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { SchemaTypes, Types, model, Schema as MongooseSchema, HydratedDocument } from 'mongoose';

export type CartDocument = HydratedDocument<Cart>;

@Schema({ timestamps: true })
export class Cart {

    @Prop({ required: false })
    isOrdered: boolean

     @Prop({ required: false, default: 0})
    total_price: string

    @Prop({ type: [MongooseSchema.Types.ObjectId], ref: 'Product', required: false })
    products: MongooseSchema.Types.ObjectId[]
    // ref
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
    user: MongooseSchema.Types.ObjectId


}

export const CartSchema = SchemaFactory.createForClass(Cart);

