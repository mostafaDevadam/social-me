import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { SchemaTypes, Types, model, Schema as MongooseSchema, HydratedDocument  } from 'mongoose';

export type ArchiveDocument = HydratedDocument<Archive>;

@Schema({ timestamps: true })
export class Archive {

    @Prop({ type: [MongooseSchema.Types.ObjectId], ref: 'Post', required: false })
    posts: MongooseSchema.Types.ObjectId[]

    @Prop({ type: Boolean , required: false, default: false })
    isMessage: boolean

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Message', required: false })
    message: MongooseSchema.Types.ObjectId

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Chat', required: false, })
    chat: MongooseSchema.Types.ObjectId

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true,  })
    user: MongooseSchema.Types.ObjectId

}

export const ArchiveSchema = SchemaFactory.createForClass(Archive);
