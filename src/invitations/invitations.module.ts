import { Module } from '@nestjs/common';
import { InvitationsService } from './invitations.service';
import { InvitationsController } from './invitations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Inviation, InviationSchema } from './invitation.schema';
import { EventsModule } from 'src/events/events.module';
import { GroupsModule } from 'src/groups/groups.module';
import { PagesModule } from 'src/pages/pages.module';

@Module({
   imports: [
              MongooseModule.forFeature([{ name: Inviation.name, schema: InviationSchema }]),
              EventsModule,
              GroupsModule,
              PagesModule,
             
        ],
  providers: [InvitationsService],
  controllers: [InvitationsController]
})
export class InvitationsModule {}
