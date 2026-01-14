import { Module } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikesController } from './likes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Like, LikeSchema } from './like.schema';
import { PostsModule } from 'src/posts/posts.module';

@Module({
   imports: [
    MongooseModule.forFeature([{ name: Like.name, schema: LikeSchema }]),
    
  ],
  providers: [LikesService],
  controllers: [LikesController]
})
export class LikesModule {}
