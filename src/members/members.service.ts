import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Member } from './member.schema';

@Injectable()
export class MembersService {

    constructor(
        @InjectModel(Member.name) private memberModel: Model<Member>,

    ) { }

    async createByPageIdAndMember(pageId: any, member: any) {
        const one = await this.findOneByPageIdAndMember(pageId, member);
        if (one) return "Member already exists";
        return await this.memberModel.create({ page: pageId, member: member });
    }

    async createByGroupIdAndMember(groupId: any, member: any) {
        const one = await this.findOneByPageIdAndMember(groupId, member);
        if (one) return "Member already exists";
        return await this.memberModel.create({ group: groupId, member: member });
    }

    async createByEventIdAndMember(eventId: any, member: any) {
        const one = await this.findOneByEventIdAndMember(eventId, member);
        if (one) return "Member already exists";
        return await this.memberModel.create({ event: eventId, member: member });
    }

    async addMemberByChatId(chatId: any, member: any) {
        return await this.memberModel.create({ chat: chatId, member: member });
    }

    async findOneByPageIdAndMember(pageId: any, member: any) {
        return await this.memberModel.findOne({ page: pageId, member: member });
    }

    async findOneByGroupIdAndMember(groupId: any, member: any) {
        return await this.memberModel.findOne({ group: groupId, member: member });
    }

    async findOneByEventIdAndMember(eventId: any, member: any) {
        return await this.memberModel.findOne({ event: eventId, member: member });
    }

    async findAllByPageId(pageId: any) {
        return await this.memberModel.find({ page: pageId }).populate('member').exec();
    }

    async findAllByGroupId(groupId: any) {
        return await this.memberModel.find({ group: groupId }).populate('member').exec();
    }

     async findAllByEventId(eventId: any) {
        return await this.memberModel.find({ event: eventId }).populate('member').exec();
    }

    async findAllByChatId(chatId: any) {
        return await this.memberModel.find({ chat: chatId }).populate('member').exec();
    }

    async 

    async getOneByPageIdAndMember(pageId: any, member: any) {
        return await this.memberModel.findOne({ page: pageId, member: member });
    }

    async getOneByGroupIdAndMember(groupId: any, member: any) {
        return await this.memberModel.findOne({ group: groupId, member: member });
    }

     async getOneByEventIdAndMember(eventId: any, member: any) {
        return await this.memberModel.findOne({ event: eventId, member: member });
    }

    async removeById(id: any) {
        return await this.memberModel.findByIdAndDelete(id).exec();
    }

    async removeMany(ids: any[]) {
        return await this.memberModel.deleteMany({ _id: { $in: ids } }).exec();
    }

    async removeByPageIdAndMember(pageId: any, member: any) {
        return await this.memberModel.findOneAndDelete({ page: pageId, member: member }).exec();
    }

    async removeByGroupIdAndMember(groupId: any, member: any) {
        return await this.memberModel.findOneAndDelete({ group: groupId, member: member }).exec();
    }



}
