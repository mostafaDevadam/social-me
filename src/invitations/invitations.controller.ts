import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { InvitationsService } from './invitations.service';

@Controller('invitations')
export class InvitationsController {

    constructor(private invitationService: InvitationsService) { }

    @Post("/event/:eventId")
    async createInvitationEvent(@Param("eventId") eventId: string,
        @Body() invitation: { message: string, sender: any, receiver: any, event: any }) {
        invitation.event = eventId    
        return this.invitationService.createInviteEvent(invitation);
    }

    @Post("/page/:pageId")
    async createInvitationPage(@Param("pageId") pageId: string,
        @Body() invitation: { message: string, sender: any, receiver: any, page: any }) {
        invitation.page = pageId    
        return this.invitationService.createInvitePage(invitation);
    }

    @Post("/group/:groupId")
    async createInvitationGroup(@Param("groupId") groupId: string,
        @Body() invitation: { message: string, sender: any, receiver: any, group: any }) {
        invitation.group = groupId    
        return this.invitationService.createInviteGroup(invitation);
    }

    // receiver as member
    @Patch("/:invitationId/confirm/event")
    async confirmInviationEvent(@Param("invitationId") invitationId: string, @Body() invitation: { isConfirmed: boolean }) {
        return this.invitationService.confirmInviteEvent(invitationId, invitation.isConfirmed);
    }

    @Patch("/:invitationId/confirm/page")
    async confirmInviationPage(@Param("invitationId") invitationId: string, @Body() invitation: { isConfirmed: boolean }) {
        return this.invitationService.confirmInvitePage(invitationId, invitation.isConfirmed);
    }

    @Patch("/:invitationId/confirm/group")
    async confirmInviationGroup(@Param("invitationId") invitationId: string, @Body() invitation: { isConfirmed: boolean }) {
        return this.invitationService.confirmInviteGroup(invitationId, invitation.isConfirmed);
    }

    @Get("/all/sender/:senderId")
    async getAllInvitationsBySenderId(@Param("senderId") senderId: string) {
        return this.invitationService.getAllInvitationsBySenderId(senderId);
    }

    @Get("/all/receiver/:receiverId")
    async getAllInvitationsByReceiverId(@Param("receiverId") receiverId: string) {
        return this.invitationService.getAllInvitationsByReceiverId(receiverId);
    }

    @Get("/all/event/:eventId")
    async getAllInvitationsByEventId(@Param("eventId") eventId: string) {
        return this.invitationService.getAllInvitationsByEventId(eventId);
    }

    @Patch("/:id")
    async updateInvitation(@Param("id") id: string, @Body() invitation: { message: string }) {
        return await this.invitationService.update(id, invitation);
    }

    @Delete("/:id")
    async deleteInvitation(@Param("id") id: string) {
        return this.invitationService.remove(id);
    }


}
