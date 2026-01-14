import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { PagesService } from './pages.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('pages')
@UseGuards(AuthGuard)
export class PagesController {

    constructor(private pageService: PagesService) {}

    @Post("/user/:userId")
    async createPage(@Param("userId") userId: string, @Body() page: {user: any, name: string, description: string}) {
        page.user = userId;
        return this.pageService.createByUserId(page);
    }

    @Get("/all/user/:userId")
    async getAllPagesByUserId(@Param("userId") userId: string) {
        return this.pageService.findAllByUserId(userId);
    }

    @Get("/all")
    async getAllPages() {
        return this.pageService.findAll();
    }

    @Get("/:id")
    async getPageById(@Param("id") id: string) {
        return await this.pageService.findOneById(id);
    }

     @Patch("/:id")
    async updatePage(@Param("id") id: string, @Body() page: {name: string, description: string}) {
        return this.pageService.updateById(id, page);
    }

    @Delete("/:id")
    async deletePage(@Param("id") id: string) {
        return this.pageService.removeById(id);
    }

    @Patch("join/:pageId")
    async joinPage(@Param("pageId") pageId: string, @Body() page: {member: string}) {
        return this.pageService.joinPage(pageId, page.member);
    }

    @Patch("leave/:pageId")
    async leavePage(@Param("pageId") pageId: string, @Body() page: {member: string}) {
        return this.pageService.leavePage(pageId, page.member);
    }

}
