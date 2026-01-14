import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { SchemaTypes, Types, model, Schema as MongooseSchema, HydratedDocument } from 'mongoose';

export type InviationDocument = HydratedDocument<Inviation>;

@Schema({ timestamps: true })
export class Inviation {
    @Prop({ required: true, default: 'invite you' })
    message: string;

    @Prop({ required: false, default: true })
    isInvited: boolean;

    @Prop({ required: false, default: false })
    isConfirmed: boolean;


    // ref
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
    sender: MongooseSchema.Types.ObjectId

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
    receiver: MongooseSchema.Types.ObjectId

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Page', required: false })
    page: MongooseSchema.Types.ObjectId

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Group', required: false })
    group: MongooseSchema.Types.ObjectId

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Event', required: false })
    event: MongooseSchema.Types.ObjectId
}

export const InviationSchema = SchemaFactory.createForClass(Inviation);

