import { Module } from '@nestjs/common';
import { PagesService } from './pages.service';
import { PagesController } from './pages.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Page, PageSchema } from './page.schema';
import { MembersModule } from 'src/members/members.module';

@Module({
   imports: [
              MongooseModule.forFeature([{ name: Page.name, schema: PageSchema }]),
              MembersModule,
        ],
  providers: [PagesService],
  controllers: [PagesController],
  exports: [PagesService]
})
export class PagesModule {}
