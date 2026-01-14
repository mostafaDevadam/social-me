import { Injectable } from '@nestjs/common';
import { Event } from './events.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MembersService } from 'src/members/members.service';

@Injectable()
export class EventsService {

    constructor(
        @InjectModel(Event.name) private eventModel: Model<Event>,
         private memberService: MembersService,

    ) { }

    async create(createEventDto: any) {
        const createdEvent = new this.eventModel(createEventDto);
        return createdEvent.save();

    }

    async findAll() {
        return await this.eventModel.find().exec();
    }

    async findAllByUserId(userId) {
        return await this.eventModel.find({ user: userId }).exec();

    }
    async findAllByPageId(pageId) {
        return await this.eventModel.find({ page: pageId }).exec();

    }
    async findAllByGroupId(groupId) {
        return await this.eventModel.find({ group: groupId }).exec();

    }
    async findOneById(id) {
        return await this.eventModel.findById(id);
    }
    async updateById(updateEventDto: { _id?: any, title: string, description: string }) {
        return await this.eventModel.findByIdAndUpdate(updateEventDto._id, updateEventDto, { new: true });
    }
    async removeById(id) {
        return await this.eventModel.findByIdAndDelete(id);

    }

    async joinEvent(eventId: any, member: any) {
    // 
    const event = await this.findOneById(eventId);
    if (event.user == member) return "You are the owner of this page";
    // create a new member by eventId and member id
    return await this.memberService.createByEventIdAndMember(eventId, member);
  }
}
