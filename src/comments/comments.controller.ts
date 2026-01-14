import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('comments')
@UseGuards(AuthGuard)
export class CommentsController {

    constructor(private commentService: CommentsService) {}
    

    @Post('/post/:postId/user/:userId')
    async createComment(@Param('postId') postid: string,
     @Param('userId') userid: string,
     @Body() createCommentDto: { post: string, user: string, content: string }) {
        createCommentDto.post = postid;
        createCommentDto.user = userid;
        return this.commentService.create(createCommentDto);
    }

    @Get()
    //@UseGuards(AuthGuard)
    getAllComments() {
        return 'findAll';
    }

    @Get('/all/post/:postId')
    getAllCommentsByPostId(@Param('postId') postid: string) {
        return this.commentService.findAllByPostId(postid);
    }

    @Get('/:id')
    getCommentById(@Param('id') id: string) {
        return this.commentService.findOneById(id);
    }

    @Patch('/:id')
    async updateComment(@Param('id') id: string, @Body() comment: { content: string }) {
        return this.commentService.updateById(id, comment);
    }

     @Patch('/like/:id')
    async likeComment(@Param('id') id: any, @Body() comment: {isLike: boolean}) {
          return await this.commentService.likeComment(id, comment.isLike);
    }


    @Delete('/:id')
    async deleteComment(@Param('id') id: string) {
        return this.commentService.removeById(id);
    }


    @Get('/all/count/post/:postId')
    getCountAllCommentsByPostId(@Param('postId') postid: string) {
        return this.commentService.countAllByPostId(postid);
    }

}
