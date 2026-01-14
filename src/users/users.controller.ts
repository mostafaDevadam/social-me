import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {

    constructor(private userService: UsersService) {}

    @Post('/create')
    async create(@Body() createUserDto: CreateUserDto) {
        return await this.userService.create(createUserDto);
    }

    @Get('/view')
    async getByEmail(@Body() user: {email: string}){
       return await this.userService.findByEmail(user.email)
    }

    @Get('/all/user/:userId')
    async getAll(@Param('userId') userId: string){
       return await this.userService.findAllWithoutCurrentUser(userId)
    }

    @Get('/view/:id')
    async getOne(@Param('id') id: string) {
       return await this.userService.findById(id)
    }

    @Get('/profile')
    async getProfile(){
       return "View Profile!!";
    }
}
