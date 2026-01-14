import { Prop, Schema, SchemaFactory, } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { SchemaTypes, Types, model, Schema as MongooseSchema, HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true })
export class Product {
    @Prop({ required: true, unique: false })
    name: string;

    @Prop({ required: false, })
    description: string;

    @Prop({ required: true, })
    price: string;

    @Prop({ required: true, })
    currency: string;

    @Prop({ required: false, default: 0 })
    rate: number;




    // ref
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
    user: MongooseSchema.Types.ObjectId


}

export const ProductSchema = SchemaFactory.createForClass(Product);

