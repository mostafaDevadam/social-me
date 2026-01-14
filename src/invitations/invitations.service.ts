import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Inviation } from './invitation.schema';
import { Model } from 'mongoose';
import { EventsService } from 'src/events/events.service';
import { PagesService } from 'src/pages/pages.service';
import { GroupsService } from 'src/groups/groups.service';

@Injectable()
export class InvitationsService {

    constructor(
        @InjectModel(Inviation.name) private invitationModel: Model<Inviation>,
        private eventService: EventsService,
        private pageService: PagesService,
        private groupService: GroupsService,

    ) { }

    async createInviteEvent(createInvitationDto: any) {
         const one = await this.findOneBySenderAndReceiverAndEventId(createInvitationDto.sender, createInvitationDto.receiver, createInvitationDto.event);
         if(one) return "Invitation already exists";
        const createdPost = new this.invitationModel(createInvitationDto);
        return createdPost.save();
    }

    async createInvitePage(createInvitationDto: any) {
         const one = await this.findOneBySenderAndReceiverAndPageId(createInvitationDto.sender, createInvitationDto.receiver, createInvitationDto.page);
         if(one) return "Invitation already exists";
        const createdPost = new this.invitationModel(createInvitationDto);
        return createdPost.save();
    }

     async createInviteGroup(createInvitationDto: any) {
         const one = await this.findOneBySenderAndReceiverAndPageId(createInvitationDto.sender, createInvitationDto.receiver, createInvitationDto.group);
         if(one) return "Invitation already exists";
        const createdPost = new this.invitationModel(createInvitationDto);
        return createdPost.save();
    }

    async confirmInviteEvent(invitationId, isConfirmed: boolean) {
         const invitation = await this.findById(invitationId);
         console.log("invitation", invitation, invitation.receiver)
         const event = await this.eventService.joinEvent(invitation.event, invitation.receiver);
         return  await this.invitationModel.findByIdAndUpdate(invitationId, { isConfirmed: isConfirmed }, { new: true }).exec();
          
        }

         async confirmInvitePage(invitationId, isConfirmed: boolean) {
         const invitation = await this.findById(invitationId);
         console.log("invitation", invitation, invitation.receiver)
         const event = await this.pageService.joinPage(invitation.page, invitation.receiver);
         return  await this.invitationModel.findByIdAndUpdate(invitationId, { isConfirmed: isConfirmed }, { new: true }).exec();
          
        }

         async confirmInviteGroup(invitationId, isConfirmed: boolean) {
         const invitation = await this.findById(invitationId);
         console.log("invitation", invitation, invitation.receiver)
         const event = await this.groupService.joinGroup(invitation.group, invitation.receiver);
         return  await this.invitationModel.findByIdAndUpdate(invitationId, { isConfirmed: isConfirmed }, { new: true }).exec();
          
        }

    async getAllInvitationsBySenderId(senderId: any) {
         return await this.invitationModel.find({ sender: senderId }).populate('event').populate('page').populate('group').populate('receiver').exec();
    }
    async getAllInvitationsByReceiverId(receiverId: any) {
        return await this.invitationModel.find({ receiver: receiverId }).populate('event').populate('page').populate('group').populate('sender').exec();
    }

    async getAllInvitationsByEventId(eventId: any){
       return await this.invitationModel.find({ event: eventId }).exec();
    }

     async getAllInvitationsByPageId(pageId: any){
       return await this.invitationModel.find({ page: pageId }).exec();
    }

     async getAllInvitationsByGroupId(groupId: any){
       return await this.invitationModel.find({ group: groupId }).exec();
    }

    async findById(id: any){
        return await this.invitationModel.findById(id).exec();
    }

    async findOneBySenderAndReceiverAndEventId(senderId: any, receiverId: any, eventId: any) {
        return await this.invitationModel.findOne({ sender: senderId, receiver: receiverId, event: eventId }).exec();
    }
    async findOneBySenderAndReceiverAndPageId(senderId: any, receiverId: any, pageId: any) {
        return await this.invitationModel.findOne({ sender: senderId, receiver: receiverId, page: pageId }).exec();
    }
     async findOneBySenderAndReceiverAndGroupId(senderId: any, receiverId: any, groupId: any) {
        return await this.invitationModel.findOne({ sender: senderId, receiver: receiverId, group: groupId }).exec();
    }
    async update(id, updateInvitationDto: { message: string }) {
         return await this.invitationModel.findByIdAndUpdate(id, { message: updateInvitationDto.message }, { new: true }).exec();
    }

    async remove(id: any) {
        return await this.invitationModel.findByIdAndDelete(id).exec();
    }


}
