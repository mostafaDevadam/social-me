import { Injectable } from '@nestjs/common';
import { Collection } from './collection.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CollectionsService {

    constructor(
        @InjectModel(Collection.name) private collectionModel: Model<Collection>,
    ) { }


    async createByUserId(createCollectionDto: any) {
        const created = new this.collectionModel(createCollectionDto);
        return created.save();
    }
    async findAllByUserId(userId: any) {
         return await this.collectionModel.find({ user: userId });
    }
    async findById(id: any) {
       return await this.collectionModel.findById(id).populate("posts").exec();
    }
    async updateById(updateCollectionDto: any) {
          return await this.collectionModel.findByIdAndUpdate(updateCollectionDto._id, updateCollectionDto, { new: true });
    }

    async addPostIntoCollection(collectionId: any, postId: any) {
        return await this.collectionModel.findByIdAndUpdate(collectionId, { $addToSet: { posts: postId } }, { new: true });
    }

    async removePostFromCollection(collectionId: any, postId: any) {
        return await this.collectionModel.findByIdAndUpdate(collectionId, { $pull: { posts: postId } }, { new: true });
    }
    async removeById(id: any) {
          return await this.collectionModel.findByIdAndDelete(id); 
    }
}
