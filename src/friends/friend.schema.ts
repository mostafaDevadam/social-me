import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { SchemaTypes, Types, model, Schema as MongooseSchema, HydratedDocument  } from 'mongoose';

export type FriendDocument = HydratedDocument<Friend>;

@Schema({ timestamps: true })
export class Friend {

  // ref
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
    friend: MongooseSchema.Types.ObjectId

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
    user: MongooseSchema.Types.ObjectId
}

export const FriendSchema = SchemaFactory.createForClass(Friend);

