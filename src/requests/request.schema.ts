import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { SchemaTypes, Types, model, Schema as MongooseSchema, HydratedDocument  } from 'mongoose';

export type RequestDocument = HydratedDocument<Request>;

@Schema({ timestamps: true })
export class Request {
  @Prop({ default: false })
  isConfirm: boolean;

  @Prop({ default: false })
  isCancel: boolean;

  // ref
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
    sender: MongooseSchema.Types.ObjectId

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
    receiver: MongooseSchema.Types.ObjectId
}

export const RequestSchema = SchemaFactory.createForClass(Request);

