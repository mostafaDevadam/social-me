import { Prop, Schema, SchemaFactory, } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { SchemaTypes, Types, model, Schema as MongooseSchema, HydratedDocument } from 'mongoose';

export type CollectionDocument = HydratedDocument<Collection>;

@Schema({ timestamps: true })
export class Collection {

    @Prop({ required: true })
    name: string

     @Prop({ required: false, default: 0})
    description: string

    @Prop({ type: [MongooseSchema.Types.ObjectId], ref: 'Post', required: false })
    posts: MongooseSchema.Types.ObjectId[]
    // ref
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
    user: MongooseSchema.Types.ObjectId


}

export const CollectionSchema = SchemaFactory.createForClass(Collection);

