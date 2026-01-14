import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ArchiveService } from './archive.service';

@Controller('archives')
export class ArchiveController {

    constructor(
        private archiveService: ArchiveService
    ) { }

    @Post("/user/:userId")
    async createArchiveByUserId(@Param("userId") userId: string, @Body() createArchiveDto: { user: string, post: string }) {
        createArchiveDto.user = userId
        return await this.archiveService.createByUserId(createArchiveDto)
    }

    @Post("/user/:userId/chat/:chatId/message/:messageId")
    async createArchiveByUserIdAndChatIdAndMessageId(
        @Param("userId") userId: string,
        @Param("messageId") messageId: string,
        @Param("chatId") chatId: string,
        @Body() createArchiveDto: { user: string, chat: string, message: string }) {
        createArchiveDto.user = userId
        createArchiveDto.message = messageId
        createArchiveDto.chat = chatId
        return await this.archiveService.createByUserIdAndChatIdAndMessageId(createArchiveDto)
    }

    @Get("/all/user/:userId")
    async findAllArchives(@Param("userId") userId: string) {
        return this.archiveService.findAllByUserId(userId)
    }

    @Get("/all/chat/:chatId")
    async findAllArchivesByChatId(@Param("chatId") chatId: string) {
        return this.archiveService.findAllByChatId(chatId)
    }

    @Get("/one/user/:userId")
    async getOneArchivebyUserId(@Param("userId") userId: string) {
        return this.archiveService.findOneByUserId(userId)
    }

    @Get("/:id")
    async getArchiveById(@Param("id") id: string) {
        return this.archiveService.findById(id)
    }

    @Patch("/:id")
    async updateArchive(@Param("id") id: string, @Body() updateArchiveDto: { user: any, post: any }) {
        return this.archiveService.update(id, updateArchiveDto)
    }

    @Patch("/:archiveId/remove/post/:postId")
    async removePostFromArchive(@Param("archiveId") archiveId: string, @Param("postId") postId: string, @Body() updateArchiveDto: any) {
        return this.archiveService.removePostArchive(archiveId, postId)
    }

    @Delete("/:archiveId/message/:messageId")
    async removeMessageFromArchive(@Param("archiveId") archiveId: string, @Param("messageId") messageId: string) {
        return this.archiveService.removeArchive(archiveId, messageId)
    }

    /*@Patch("/:archiveId/remove/message/:messageId")
    async removeMessageFromArchive(@Param("archiveId") archiveId: string, @Param("messageId") messageId: string, @Body() updateArchiveDto: any) {
        return this.archiveService.removeMessageFromArchive(archiveId, messageId)
    }*/


}
