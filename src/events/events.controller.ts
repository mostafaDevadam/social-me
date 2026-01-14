import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { EventsService } from './events.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('events')
@UseGuards(AuthGuard)
export class EventsController {

    constructor(
        private eventService: EventsService
    ) { }


    @Post("/user/:userId")
    async createEventByUser(@Param("userId") userId: string,
        @Body() createEventDto: { user: any, title: string, description: string, isPublic?: boolean }) {
        createEventDto.user = userId
        createEventDto.isPublic = true
        return this.eventService.create(createEventDto);
    }
    @Post("/page/:pageId")
    async createEventByPage(@Param("pageId") pageId: string,
        @Body() createEventDto: { page: any, title: string, description: string, isPublic?: boolean }) {
        createEventDto.page = pageId
        createEventDto.isPublic = false
        return this.eventService.create(createEventDto);
    }

    @Post("/group/:groupId")
    async createEventByGroup(@Param("groupId") groupId: string,
        @Body() createEventDto: {  group: any, title: string, description: string, isPublic?: boolean }) {
        createEventDto.group = groupId
        createEventDto.isPublic = false
        return this.eventService.create(createEventDto);


    }

     @Get("/all")
    async getAllEvents() {
        return await this.eventService.findAll();
    }

    @Get("/all/user/:userId")
    async getAllEventsByUser(@Param("userId") userId: string) {
        return await this.eventService.findAllByUserId(userId);
    }
    @Get("/all/page/:pageId")
    async getAllEventsByPage(@Param("pageId") pageId: any) {
        return await this.eventService.findAllByPageId(pageId);
    }

    @Get("/all/group/:groupId")
    async getAllEventsByGroup(@Param("groupId") groupId: any) {
        return await this.eventService.findAllByGroupId(groupId);
    }

    

    @Get("/:id")
    async getEventById(@Param("id") id: any) {
        return await this.eventService.findOneById(id);
    }

    @Patch("/:id")
    async updateEventById(@Param("id") id: any, @Body() updateEventDto: { _id?: any, title: string, description: string}) {
        updateEventDto._id = id
        return await this.eventService.updateById(updateEventDto);
    }

    @Delete("/:id")
    async deleteEventById(@Param("id") id: any) {
        return await this.eventService.removeById(id);
    }

    @Patch("join/:eventId")
        async joinGroup(@Param("eventId") eventId: string, @Body() event: {member: string}) {
            return this.eventService.joinEvent(eventId, event.member);
        }





}
