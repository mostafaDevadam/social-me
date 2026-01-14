import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { SharesService } from './shares.service';

@Controller('shares')
export class SharesController {

    constructor(
        private shareService: SharesService
    ) {}

    @Post("/post/:postId/user/:userId")
    async createShareByUserAndPost(@Param("userId") userId: string, @Param("postId") postId: string, @Body() createShareDto: {content: string}) {
           return await this.shareService.createByUserAndPost({user: userId, post: postId,content: createShareDto.content});
    }

    @Get("/all/user/:userId")
    async getAllSharesByUserId(@Param("userId") userId: string) {
         return await this.shareService.findAllByUserId(userId);
     }

     @Get("/all")
     async getAllShares(){
         return await this.shareService.findAll();
     }

     @Delete("/:id")
     async removeShareById(@Param("id") id: string) {
         return this.shareService.removeById(id);
     }


}
