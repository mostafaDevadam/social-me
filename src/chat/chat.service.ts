import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chat } from './chat.schema';

@Injectable()
export class ChatService {

    constructor(
        @InjectModel(Chat.name) private chatModel: Model<Chat>,
    ) { }

    async create(members: any[]) {
        const created = new this.chatModel();
        const one = await created.save();
        // 
        const updated = await this.chatModel.findByIdAndUpdate(
            one._id,
            { $addToSet: { members: { $each: members } } }, { new: true }
        );
        return updated;
    }

    async createByMembers() {
        // create chat,get chatId
        // add member by chatId, member
        // update --> add members Ids in chat,
        // return update
    }

    async findById(id: any) {
        return await this.chatModel.findById(id);
    }

    async FindAllByMember(memberId: any) {
        return await this.chatModel.find({ members: memberId }).populate('members').exec();
    }

    async remove(id: any) {
        return await this.chatModel.findByIdAndDelete(id);
    }
}
