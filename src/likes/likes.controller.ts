import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { LikesService } from './likes.service';

@Controller('likes')
@UseGuards(AuthGuard)
export class LikesController {

    constructor(private likeService: LikesService) { }

    @Post('post/:postId/user/:userId')
    async likePostByUser(
        @Param('userId') userId: string,
        @Param('postId') postId: string,
        @Body() createLikeDto: {user: string, post: string, isLike: boolean}) {
            createLikeDto.user = userId;
            createLikeDto.post = postId;
        return await this.likeService.likePostbyUserId(createLikeDto);
    }

     @Post('comment/:commentId/user/:userId')
    async likeCommentByUser(
        @Param('userId') userId: string,
        @Param('commentId') commentId: string,
        @Body() createLikeDto: {user: string, comment: string, isLike: boolean}) {
            createLikeDto.user = userId;
            createLikeDto.comment = commentId;
        return await this.likeService.likeCommentbyUserId(createLikeDto);
    }

    @Get('post/:postId')
    async getAllLikesByPostId(@Param('postId') postId: string) {
        return await this.likeService.findAllByPostId(postId);
    }

    @Get('comment/:commentId')
    async getAllLikesByCommentId(@Param('commentId') commentId: string) {
        return await this.likeService.findAllByCommentId(commentId);
    }
}
