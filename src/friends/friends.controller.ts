import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { FriendsService } from './friends.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('friends')
@UseGuards(AuthGuard)
export class FriendsController {

    constructor(
        private friendService: FriendsService
    ) { }

    @Post("/add/user/:userId")
    async addFriend(@Param('userId') userId: string, @Body() body: { friend: string, user: string }) {
       // createFriend
       body.user = userId;
       return await this.friendService.createFriend(body);
    }

    @Get('/all/user/:userId')
    async getAllFriendsbyUserId(@Param('userId') userId: string) {
      // findAllFriendsbyUserId
      return await this.friendService.findAllFriendsbyUserId(userId);
    }

     @Get('/all/friend/:friendId')
    async getAllFriendsbyFriendId(@Param('friendId') friendId: string) {
      // findAllFriendsbyUserId
      return await this.friendService.findAllFriendsbyFriendId(friendId);
    }

    @Delete('/:id')
    async removeFriend(@Param('id') id: string) {
       // removeFriend
       return await this.friendService.removeFriend(id);
    }
}
