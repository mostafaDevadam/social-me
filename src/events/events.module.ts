import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Event, EventSchema } from './events.schema';
import { MembersModule } from 'src/members/members.module';

@Module({
  imports: [
      MongooseModule.forFeature([{ name: Event.name, schema: EventSchema }]),
      MembersModule,
     
    ],
  controllers: [EventsController],
  providers: [EventsService],
  exports: [EventsService]
})
export class EventsModule {}
