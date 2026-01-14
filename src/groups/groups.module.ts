import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Group, GroupSchema } from './group.schema';
import { MembersModule } from 'src/members/members.module';

@Module({
  imports: [
      MongooseModule.forFeature([{ name: Group.name, schema: GroupSchema }]),
      MembersModule,
  
    ],
  providers: [GroupsService],
  controllers: [GroupsController],
  exports: [GroupsService]
})
export class GroupsModule {}
