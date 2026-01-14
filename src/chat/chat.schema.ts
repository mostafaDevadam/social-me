import { Prop, Schema, SchemaFactory, } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { SchemaTypes, Types, model, Schema as MongooseSchema, HydratedDocument } from 'mongoose';

export type ChatDocument = HydratedDocument<Chat>;

@Schema({ timestamps: true })
export class Chat {
    // ref
    @Prop({ type: [MongooseSchema.Types.ObjectId], ref: 'User', required: true })
    members: MongooseSchema.Types.ObjectId[]

    @Prop({ type: [MongooseSchema.Types.ObjectId], ref: 'Member', required: false })
    people: MongooseSchema.Types.ObjectId[]


}

export const ChatSchema = SchemaFactory.createForClass(Chat);

