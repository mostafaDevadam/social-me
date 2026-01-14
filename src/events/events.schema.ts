import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { SchemaTypes, Types, model, Schema as MongooseSchema, HydratedDocument  } from 'mongoose';

export type EventDocument = HydratedDocument<Event>;

@Schema({ timestamps: true })
export class Event {
  @Prop({ default: true })
  isPublic: boolean;

  @Prop({ required: true })
  title: string;

  @Prop({ required: false })
  description: string;



  // ref
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: false })
    user: MongooseSchema.Types.ObjectId

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Group', required: false })
    group: MongooseSchema.Types.ObjectId

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Page', required: false })
    page: MongooseSchema.Types.ObjectId
}

export const EventSchema = SchemaFactory.createForClass(Event);

