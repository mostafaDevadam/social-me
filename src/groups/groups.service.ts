import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Group } from './group.schema';
import { MembersService } from 'src/members/members.service';

@Injectable()
export class GroupsService {
    constructor(
        @InjectModel(Group.name) private groupModel: Model<Group>,
         private memberService: MembersService,

    ) { }

    
  async createByUserId(createPageDto: { user: any, name: string, description: string }) {
    const createdPost = new this.groupModel(createPageDto);
    return createdPost.save();
  }
  async findAllByUserId(userId: any) {
    return await this.groupModel.find({ user: userId }).exec();
  }
  async findAll() {
    return await this.groupModel.find().exec();
  }

  async findOneById(id: any) {
    return await this.groupModel.findById(id).exec();
  }
  async updateById(id: any, page: { name: string, description: string }) {
    return await this.groupModel.findByIdAndUpdate(id, page, { new: true }).exec();
  }
  async removeById(id: any) {
    const members = await this.memberService.findAllByPageId(id);
    const ids = members.map(member => member._id);
    const removed_ids = await this.memberService.removeMany(ids);
    console.log("removed_ids:", removed_ids)
    return await this.groupModel.findByIdAndDelete(id).exec()
  }
  async joinGroup(groupId: any, member: any) {
    // check if member == page.user then return
    const page = await this.findOneById(groupId);
    if (page.user == member) return "You are the owner of this page";
    // create a new member by pageId and member id
    // check if the member is already in the page, 
    return await this.memberService.createByGroupIdAndMember(groupId, member);
  }

  async leavegroup(groupId: any, member: any) {
    return await this.memberService.removeByGroupIdAndMember(groupId, member);
  }
}
