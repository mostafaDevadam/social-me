import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Request } from './request.schema';
import { Model } from 'mongoose';
import { FriendsService } from 'src/friends/friends.service';

@Injectable()
export class RequestsService {

    constructor(
        @InjectModel(Request.name) private requestModel: Model<Request>,
        private friendService: FriendsService,
    ) { }


    async createRequestFriend(createRequestFriendDto: { receiverId: string, senderId: string }) {
        const requestFriend = await this.requestModel.findOne({ receiver: createRequestFriendDto.receiverId, sender: createRequestFriendDto.senderId }).exec();
        if (requestFriend) return "It's already request";
        const createdRequestFriend = new this.requestModel(createRequestFriendDto);
        return createdRequestFriend.save();
    }

    async confirmRequestFriend(requestId: any, isConfirm: boolean) {
        const requestFriend = await this.requestModel.findById(requestId).exec();
        if(requestFriend.isCancel) return "It's already cancel";
        const updateRequestFriend = await this.requestModel.findByIdAndUpdate(requestId, { $set: { isConfirm: isConfirm } }, { new: true });
        console.log('updateRequestFriend', updateRequestFriend)
        //  receiverId is friend
        // get receiverId and senderId from requestFriend
        // add receiverId(friend) and userId(sender) to friends
        const sender  = updateRequestFriend.sender;
        const receiver = updateRequestFriend.receiver;
        //await this.requestModel.findByIdAndDelete(requestId).exec();
        const createdFriend = await this.friendService.createFriend({ user: sender.toString(), friend: receiver.toString() });
        console.log("createdFriend", createdFriend)  
        return updateRequestFriend
    }

    async cancelRequestFriend(requestId: any, isCancel: boolean) {
        const requestFriend = await this.requestModel.findById(requestId).exec();
        if(requestFriend.isConfirm) return "It's already confirm";
        const updateRequestFriend = await this.requestModel.findByIdAndUpdate(requestId, { $set: { isCancel: isCancel } }, { new: true });
        return updateRequestFriend

    }

    async findRequestsbySenderId(senderId: any) {
        const requestsFriends = await this.requestModel.find({ sender: senderId, isConfirm: false, isCancel: false }).populate('sender').populate('receiver').exec();
        return requestsFriends
    }

    async findRequestsbyReceiverId(receiverId: any) {
        const requestsFriends = await this.requestModel.find({ receiver: receiverId, isConfirm: false, isCancel: false }).populate('sender').populate('receiver').exec();
        return requestsFriends
    }

    async removeRequestFriend(requestId: any) {
        return await this.requestModel.findByIdAndDelete(requestId).exec();
    }
}
