import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { SchemaTypes, Types, model, Schema as MongooseSchema, HydratedDocument  } from 'mongoose';

export type CommentDocument = HydratedDocument<Comment>;

@Schema({ timestamps: true })
export class Comment {
  @Prop({ required: true })
  content: string;

  @Prop({ required: false})
  likes: number

  // ref
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Post', required: true })
    post: MongooseSchema.Types.ObjectId

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
    user: MongooseSchema.Types.ObjectId
}

export const CommentSchema = SchemaFactory.createForClass(Comment);

