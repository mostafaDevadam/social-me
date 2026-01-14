import { Global, Module } from '@nestjs/common';
import { CommentsModule } from 'src/comments/comments.module';
import { CommentsService } from 'src/comments/comments.service';
import { PostsModule } from 'src/posts/posts.module';

@Global()
@Module({
    imports: [ ],
    exports: [],
})
export class CommonModule {}
