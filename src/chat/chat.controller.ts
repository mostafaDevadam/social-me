import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { ChatService } from './chat.service';

@Controller('chats')
@UseGuards(AuthGuard)
export class ChatController {

    constructor(private chatService: ChatService) {}

    @Post()
    async createChat(@Body() createChatDto: { members: any[] }) {
        return await this.chatService.create(createChatDto.members);
    }

    @Get("/all/member/:memberId")
    async getAllChatsByMember(@Param("memberId") memberId: any) {
        return await this.chatService.FindAllByMember(memberId);
    }

    @Delete("/:id")
    async removeChat(@Param("id") id: any) {
        return await this.chatService.remove(id);
    }
}
