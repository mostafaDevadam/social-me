import { Injectable } from '@nestjs/common';
import { InjectModel, Schema } from '@nestjs/mongoose';
import mongoose, { Model, SchemaType, ObjectId, Types } from 'mongoose';
import { Page } from './page.schema';
import { MembersService } from 'src/members/members.service';

@Injectable()
export class PagesService {

  constructor(
    @InjectModel(Page.name) private pageModel: Model<Page>,
    private memberService: MembersService,

  ) { }

  async createByUserId(createPageDto: { user: any, name: string, description: string }) {
    const createdPost = new this.pageModel(createPageDto);
    return createdPost.save();
  }
  async findAllByUserId(userId: any) {
    return await this.pageModel.find({ user: userId }).exec();
  }
  async findAll() {
    return await this.pageModel.find().exec();
  }

  async findOneById(id: any) {
    console.log("id:", id)

    try {
      //new ObjectId(id); // This will throw the BSONError
      const one = await this.pageModel.findById(id).exec();
      const objectId = new mongoose.Types.ObjectId(id.toString()); 
      console.log("one:", objectId);
      return one;
    } catch (error) {
      console.error("findOneById error:",error.message); // Output: input must be a 24 character hex string, 12 byte Uint8Array, or an integer
      return error
    }

  }
  async updateById(id: any, page: { name: string, description: string }) {
    return await this.pageModel.findByIdAndUpdate(id, page, { new: true }).exec();
  }
  async removeById(id: any) {
    const members = await this.memberService.findAllByPageId(id);
    const ids = members.map(member => member._id);
    const removed_ids = await this.memberService.removeMany(ids);
    console.log("removed_ids:", removed_ids)
    return await this.pageModel.findByIdAndDelete(id).exec()
  }
  async joinPage(pageId: any, member: any) {
    // check if member == page.user then return
    const page = await this.findOneById(pageId);
    if (page?.user == member) return "You are the owner of this page";
    // create a new member by pageId and member id
    // check if the member is already in the page, 
    return await this.memberService.createByPageIdAndMember(pageId, member);
  }

  async leavePage(pageId: any, member: any) {
    return await this.memberService.removeByPageIdAndMember(pageId, member);
  }
}
