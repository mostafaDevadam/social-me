import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from './message.schema';

@Injectable()
export class MessagesService {


    constructor(
        @InjectModel(Message.name) private messageModel: Model<Message>,

    ) { }

    async create(createMessageDto: { user: any, chat: any, content: string }) {
        console.log("create message dto:", createMessageDto)
        // create chat,get chatId
        // create message by chatId, message
        const message = new this.messageModel(createMessageDto);
        return (await message.save()).populate('user');
    }

    async findAllByChatId(chatId: any) {
        const all = await this.messageModel.find({ chat: chatId }).populate('user').exec();
         
        return all
    }

    async findAllByUserId(userId: any) {
        return await this.messageModel.find({ user: userId });
    }

    async update(updateMessageDto: { _id: any, content }) {
        return await this.messageModel.findByIdAndUpdate(updateMessageDto._id, { content: updateMessageDto.content }, { new: true });
    }

    async remove(_id: any) {
        return await this.messageModel.findByIdAndDelete(_id);
    }
}
