import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { SchemaTypes, Types, model, Schema as MongooseSchema, HydratedDocument  } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema({ timestamps: true })
export class Post {
  @Prop({ required: true, unique: false })
  content: string;

  @Prop({ required: false, default: 0})
  likes: number;

  @Prop({ required: false, default: 0})
  comments: number;

  @Prop({ required: false, default: true })
  isPublic: boolean;


  // ref
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
    user: MongooseSchema.Types.ObjectId

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Page', required: false })
    page: MongooseSchema.Types.ObjectId

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Group', required: false })
    group: MongooseSchema.Types.ObjectId

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Event', required: false })
    event: MongooseSchema.Types.ObjectId
}

export const PostSchema = SchemaFactory.createForClass(Post);

