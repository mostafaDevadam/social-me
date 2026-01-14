import { Injectable } from '@nestjs/common';
import { Friend } from './friend.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class FriendsService {
    constructor(
        @InjectModel(Friend.name) private friendModel: Model<Friend>,
    ) { }


    async createFriend(createFriendDto: { user: string, friend: string }) {
        const friend = await this.friendModel.findOne({ user: createFriendDto.user, friend: createFriendDto.friend }).exec();
        if (friend) return "It's already friend";
       const createdFriend = new this.friendModel(createFriendDto);
        return createdFriend.save();
    }

    async findAllFriendsbyUserId(userId: any) {
      const friends = await this.friendModel.find({user: userId}).populate('friend').exec();
      return friends;
    }

    async findAllFriendsbyFriendId(friendId: any) {
      const friends = await this.friendModel.find({friend: friendId}).populate('friend').populate('user').exec();
      return friends;
    }


    async removeFriend(id: any) {
        const removed = await this.friendModel.findByIdAndDelete(id).exec();
        return removed
    }
}
