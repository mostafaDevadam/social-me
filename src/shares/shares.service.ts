import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Share } from './share.schema';

@Injectable()
export class SharesService {

    constructor(
        @InjectModel(Share.name) private shareModel: Model<Share>,
    ) { }


    async createByUserAndPost(createShareDto: { user: any, post: any, content: string }) {
       return await this.shareModel.create({ user: createShareDto.user, post: createShareDto.post, content: createShareDto.content });
    }
    async findAllByUserId(userId) {
       return await this.shareModel.find({ user: userId }).populate('post').exec();
    }
    async findAll() {
       return await this.shareModel.find().populate('post').exec();
    }
    async removeById(id: any) {
      return await this.shareModel.findByIdAndDelete(id);
    }




}
