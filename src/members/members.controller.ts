import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { MembersService } from './members.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('members')
@UseGuards(AuthGuard)
export class MembersController {
    constructor(private memberService: MembersService) {}

    @Get('/all/page/:pageId')
    async getAllByPageId(@Param("pageId") pageId: string) {
        return this.memberService.findAllByPageId(pageId);
    }

    @Get('/all/group/:groupId')
    async getAllByGroupId(@Param("groupId") groupId: string) {
        return this.memberService.findAllByGroupId(groupId);
    }

     @Get('/all/event/:eventId')
    async getAllByEventId(@Param("eventId") eventId: string) {
        return this.memberService.findAllByEventId(eventId);
    }

    @Get("/one/page/:pageId/member/:memberId")
    async getOneByPageIdAndMember(@Param("pageId") pageId: string, @Param("memberId") memberId: string) {
        return this.memberService.getOneByPageIdAndMember(pageId, memberId);
    }

    @Get("/one/group/:groupId/member/:memberId")
    async getOneByGroupIdAndMember(@Param("groupId") groupId: string, @Param("memberId") memberId: string) {
        return this.memberService.getOneByGroupIdAndMember(groupId, memberId);
    }

     @Get("/one/event/:eventId/member/:memberId")
    async getOneByEventIdAndMember(@Param("eventId") eventId: string, @Param("memberId") memberId: string) {
        return this.memberService.getOneByEventIdAndMember(eventId, memberId);
    }

    @Delete('/:id')
    async removeById(@Param("id") id: string) {
        return this.memberService.removeById(id);
    }
}
