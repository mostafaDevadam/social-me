import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CollectionsService } from './collections.service';

@Controller('collections')
@UseGuards(AuthGuard)
export class CollectionsController {

    constructor(private collectionsService: CollectionsService) {
    }

    @Post("/user/:userId")
    async createCollectionByUserId(@Param("userId") userId: string, @Body() createCollectionDto: any) {
        createCollectionDto.user = userId
        return this.collectionsService.createByUserId(createCollectionDto);
    }

    @Get("/all/user/:userId")
    async getAllCollectionsByUserId(@Param("userId") userId: string) {
        return this.collectionsService.findAllByUserId(userId);
    }

    @Get("/:id")
    async getCollectionById(@Param("id") id: string) {
        return this.collectionsService.findById(id);
    }

    @Patch("/:id")
    async updateCollectionById(@Param("id") id: string, @Body() updateCollectionDto: any) {
        updateCollectionDto._id = id
        return this.collectionsService.updateById(updateCollectionDto);
    }

     @Patch("/:collectionId/add/post/:postId")
     async addPostIntoCollection(@Param("collectionId") collectionId: string, @Param("postId") postId: string) {
         return this.collectionsService.addPostIntoCollection(collectionId, postId);
     }

     @Patch("/:collectionId/remove/post/:postId")
     async removePostFromCollection(@Param("collectionId") collectionId: string, @Param("postId") postId: string) {
         return this.collectionsService.removePostFromCollection(collectionId, postId);
     }

    @Delete("/:id")
    async removeById(@Param("id") id: string) {
        return this.collectionsService.removeById(id);
    }
}
