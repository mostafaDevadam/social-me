import { Module } from '@nestjs/common';
import { SharesService } from './shares.service';
import { SharesController } from './shares.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Share, ShareSchema } from './share.schema';

@Module({
  imports: [
      MongooseModule.forFeature([{ name: Share.name, schema: ShareSchema }]),
      
    ],
  providers: [SharesService],
  controllers: [SharesController]
})
export class SharesModule {}
