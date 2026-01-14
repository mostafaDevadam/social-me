import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Like } from './like.schema';

@Injectable()
export class LikesService {
    constructor(
            @InjectModel(Like.name) private likeModel: Model<Like>,
          ) {}

    async likePostbyUserId(createLikeDto: any) {

        const likeDoc = await this.likeModel.findOne({ user: createLikeDto.user, post: createLikeDto.post }).exec();

        if(likeDoc &&likeDoc.isLike != createLikeDto.isLike){
            return await this.likeModel.findByIdAndUpdate(likeDoc._id, { isLike: createLikeDto.isLike }, { new: true }).exec();
        }

        if(likeDoc){
            return "It's already liked"
        }

        return await this.likeModel.create(createLikeDto);
    }      

     async likeCommentbyUserId(createLikeDto: any) {

        const likeDoc = await this.likeModel.findOne({ user: createLikeDto.user, comment: createLikeDto.comment }).exec();

        if(likeDoc &&likeDoc.isLike != createLikeDto.isLike){
            return await this.likeModel.findByIdAndUpdate(likeDoc._id, { isLike: createLikeDto.isLike }, { new: true }).exec();
        }

        if(likeDoc){
            return "It's already liked"
        }

        return await this.likeModel.create(createLikeDto);
    }      

    async findAllByPostId(postId: string) {
        return await this.likeModel.countDocuments({ post: postId, isLike: true }).exec(); // find({ post: postId, isLike: true })
      }

      async findAllByCommentId(commentId: string) {
        return await this.likeModel.countDocuments({ comment: commentId, isLike: true }).exec();
      }


}
