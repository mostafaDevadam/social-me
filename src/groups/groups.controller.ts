import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { GroupsService } from './groups.service';

@Controller('groups')
@UseGuards(AuthGuard)
export class GroupsController {

    constructor(private groupService: GroupsService) {}

     @Post("/user/:userId")
        async createGroup(@Param("userId") userId: string, @Body() group: {user: any, name: string, description: string}) {
            group.user = userId;
            return this.groupService.createByUserId(group);
        }
    
        @Get("/all/user/:userId")
        async getAllGroupsByUserId(@Param("userId") userId: string) {
            return this.groupService.findAllByUserId(userId);
        }
    
        @Get("/all")
        async getAllGroups() {
            return this.groupService.findAll();
        }

        @Get("/:id")
        async getGroupById(@Param("id") id: string) {
            return this.groupService.findOneById(id)
        }
    
         @Patch("/:id")
        async updateGroup(@Param("id") id: string, @Body() group: {name: string, description: string}) {
            return this.groupService.updateById(id, group);
        }
    
        @Delete("/:id")
        async deleteGroup(@Param("id") id: string) {
            return this.groupService.removeById(id);
        }
    
        @Patch("join/:groupId")
        async joinGroup(@Param("groupId") groupId: string, @Body() group: {member: string}) {
            return this.groupService.joinGroup(groupId, group.member);
        }
    
        @Patch("leave/:groupId")
        async leaveGroup(@Param("groupId") groupId: string, @Body() group: {member: string}) {
            return this.groupService.leavegroup(groupId, group.member);
        }
}
