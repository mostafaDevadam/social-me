import { Injectable } from '@nestjs/common';
import { Archive } from './archive.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ArchiveService {

    constructor(
        @InjectModel(Archive.name) private archiveModel: Model<Archive>,
    ) { }

    async createByUserId(createArchiveDto: { post: any, user: any }) {
        console.log("createArchiveDto:", createArchiveDto)
        // check if user has archive then get one by user
        const one = await this.findOneByUserId(createArchiveDto.user)
        if (one) {
            // check if one has the postId and add it
          return  await this.archiveModel.findByIdAndUpdate(one._id, { $addToSet: { posts: createArchiveDto.post } }, { new: true });
        } else {
            // create new archive
            const created = new this.archiveModel({ user: createArchiveDto.user, posts: [createArchiveDto.post] });
            return created.save();

        }
        // check id user has postId in archive, if not create new archive
    }

/*
    async createByUserIdAndMessageId(createArchiveDto: { user: any, message: any }) {
         console.log("createArchiveDto Message:", createArchiveDto)
        // check if user has archive then get one by user
        const one = await this.findOneByUserId(createArchiveDto.user)
        if (one) {
            // check if one has the postId and add it
          return  await this.archiveModel.findByIdAndUpdate(one._id, { $addToSet: { messages: createArchiveDto.message } }, { new: true });
        } else {
            // create new archive
            const createdComment = new this.archiveModel({ user: createArchiveDto.user, messages: [createArchiveDto.message], isMessage: true });
            return createdComment.save();

        }
    }*/

    async createByUserIdAndChatIdAndMessageId(createArchiveDto: { user: any, chat: any, message: any }) {
         const createdComment = new this.archiveModel({ user: createArchiveDto.user, chat: createArchiveDto.chat, message: createArchiveDto.message, isMessage: true });
            return createdComment.save();
    }

    
    async findAllByUserId(userId: any) {
        return await this.archiveModel.find({ user: userId })
    }

    async findAllByChatId(chatId: any){
        return await this.archiveModel.find({ chat: chatId }).populate('message').exec();
    }

    async findOneByUserId(userId: any) {
        return await this.archiveModel.findOne({ user: userId }).populate('posts').exec();
    }
    async findById(id: any) {
        return await this.archiveModel.findById(id)
    }
    async update(id: any, updateArchiveDto: { user: any, post: any }) {

    }

    async removePostArchive(archiveId, postId) {
        const updated = await this.archiveModel.findByIdAndUpdate(archiveId, { $pull: { posts: postId } }, { new: true });
        const count = updated.posts.length
        if(count === 1) {
            //await this.archiveModel.findByIdAndDelete(archiveId)
            console.log("count:", count)
            const updated = await this.archiveModel.findByIdAndUpdate(archiveId, { $set: { posts: [] } }, { new: true });
            return updated
        }
        return updated
    }
/*
    async removeMessageFromArchive(archiveId, messageId) {
        const updated = await this.archiveModel.findByIdAndUpdate(archiveId, { $pull: { messages: messageId } }, { new: true });
        const count = updated.messages.length
        if(count === 1) {
            //await this.archiveModel.findByIdAndDelete(archiveId)
            console.log("count:", count)
            const updated = await this.archiveModel.findByIdAndUpdate(archiveId, { $set: { messages: [] } }, { new: true });
            return updated
        }
        return updated
    }*/

        async removeArchive(archiveId, messageId){
            return await this.archiveModel.findOneAndDelete({ _id: archiveId, message: messageId })
        }
}
