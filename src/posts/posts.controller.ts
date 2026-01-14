import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('posts')
@UseGuards(AuthGuard)
export class PostsController {

    constructor(private postService: PostsService) { }


    @Post('/user/:userId')
    async createPost(@Param('userId') userId: string, @Body() post: { user: string, content: string, isPublic?: boolean }) {
        post.user = userId;
         post.isPublic = true
        return this.postService.create(post);
    }

    @Post('/user/:userId/page/:pageId')
    async createPostInPage(@Param('userId') userId: string, @Param('pageId') pageId: string, @Body() post: { user: string, page: any, content: string, isPublic?: boolean }) {
        post.user = userId;
        post.page = pageId;
        post.isPublic = false
        return this.postService.create(post);
    }

    @Post('/user/:userId/group/:groupId')
    async createPostInGroup(@Param('userId') userId: string, @Param('groupId') groupId: string, @Body() post: { user: string, group: any, content: string, isPublic?: boolean }) {
        post.user = userId;
        post.group = groupId;
        post.isPublic = false
        return this.postService.create(post);
    }

    @Post('/user/:userId/event/:eventId')
    async createPostInEvent(@Param('userId') userId: string, @Param('eventId') eventId: string, @Body() post: { user: string, event: any, content: string, isPublic?: boolean }) {
        post.user = userId;
        post.event = eventId;
        post.isPublic = false
        return this.postService.create(post);
    }

    @Get()
    getAllPosts() {
        return this.postService.findAll();
    }

    @Get('/all/user/:userId')
    getAllPostsByUserId(@Param('userId') userId: string) {
        return this.postService.findAllByUserId(userId);
    }

    @Get('/all/page/:pageId')
    getAllPostsByPageId(@Param('pageId') pageId: string) {
        return this.postService.findAllByPageId(pageId);
    }

    @Get('/all/group/:groupId')
    getAllPostsByGroupId(@Param('groupId') groupId: string) {
        return this.postService.findAllByGroupId(groupId);
    }

     @Get('/all/event/:eventId')
    getAllPostsByEventId(@Param('eventId') eventId: string) {
        return this.postService.findAllByEventId(eventId);
    }

    @Get('/:id')
    getPostById(@Param('id') id: string) {
        return this.postService.findOneById(id);
    }

    @Patch('/:id')
    async updatePost(@Param('id') id: string, @Body() post: { content: string, isPublic?: boolean }) {
        return this.postService.updateById(id, post);
    }

    @Patch('/like/:id')
    async likePost(@Param('id') id: string, @Body() post: { isLike: boolean }) {
        return await this.postService.likePost(id, post.isLike);
    }


    @Delete('/:id')
    async deletePost(@Param('id') id: string) {
        return this.postService.removeById(id);
    }
}
