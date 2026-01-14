import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from './post.schema';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { CommentsModule } from 'src/comments/comments.module';
import { CommonModule } from 'src/common/common.module';


@Module({
      imports: [
            MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
           
      ],
      controllers: [PostsController],
      providers: [PostsService],
      exports: [PostsService],
    
})
export class PostsModule {}
