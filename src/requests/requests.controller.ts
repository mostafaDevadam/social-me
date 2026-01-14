import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('requests')
@UseGuards(AuthGuard)
export class RequestsController {

    constructor(
        private requestService: RequestsService
    ) { }

    @Post('/send')
    async createRequestFriend(@Body() createRequestFriendDto: { receiverId: string, senderId: string }) {
        return this.requestService.createRequestFriend(createRequestFriendDto);
    }

    @Patch('/confirm/:requestId')
    async sendConfirmRequestFriend(@Param('requestId') requestId: any, @Body() body: { isConfirm: boolean }) {
        return this.requestService.confirmRequestFriend(requestId, body.isConfirm);
    }
    @Patch('/cancel/:requestId')
    async sendCancelRequestFriend(@Param('requestId') requestId: any, @Body() body: { isCancel: boolean }) {
        return this.requestService.cancelRequestFriend(requestId, body.isCancel);
    }

    @Get("/sender/:senderId")
    async getRequestsbySenderId(@Param('senderId') senderId: any) {
        return this.requestService.findRequestsbySenderId(senderId);
    }

    @Get("/receiver/:receiverId")
    async getRequestsbyReceiverId(@Param('receiverId') receiverId: any) {
        return this.requestService.findRequestsbyReceiverId(receiverId);
    }

    @Delete("/:requestId")
    async removeRequestFriend(@Param('requestId') requestId: any) {
        return this.requestService.removeRequestFriend(requestId);
    }


}
