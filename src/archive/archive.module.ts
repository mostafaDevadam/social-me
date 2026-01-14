import { Module } from '@nestjs/common';
import { ArchiveService } from './archive.service';
import { ArchiveController } from './archive.controller';
import { Archive, ArchiveSchema } from './archive.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
      MongooseModule.forFeature([{ name: Archive.name, schema: ArchiveSchema }]),
      
    
    ],
  providers: [ArchiveService],
  controllers: [ArchiveController]
})
export class ArchiveModule {}
