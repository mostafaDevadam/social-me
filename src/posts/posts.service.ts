import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from './post.schema';
import { Model } from 'mongoose';
import { CommentsService } from 'src/comments/comments.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private postModel: Model<Post>,
    //private commentService: CommentsService,
  ) { }

  async create(createPostDto: any) {
    createPostDto.likes = 0
    const createdPost = new this.postModel(createPostDto);
    return createdPost.save();
  }

  async findAll() {
    return await this.postModel.find().exec();
  }

  async findAllByUserId(userId: string) {
    return await this.postModel.find({ user: userId }).exec();
  }

  async findAllByPageId(pageId: any) {
    return await this.postModel.find({ page: pageId }).exec();
  }
  async findAllByGroupId(groupId: any) {
   return await this.postModel.find({ group: groupId }).exec();
  }

  async findAllByEventId(eventId: any){
   return await this.postModel.find({ event: eventId }).exec();
  }

  async findOneById(id: string) {
    return await this.postModel.findById(id).exec();
  }

  async updateById(id: string, updatePostDto: any) {
    return await this.postModel.findByIdAndUpdate(id, updatePostDto, { new: true }).exec();
  }

  async removeById(id: string) {

    // get comments by post id
    //const comments = await this.commentService.findAllByPostId(id);
    // remove each comment
    // const ids = comments.map(comment => comment._id);

    //console.log("comments ids:", ids)



    return await this.postModel.findByIdAndDelete(id).exec();
  }

  async likePost(id: string, isLike: boolean) {
    const post = await this.findOneById(id)
    post.likes = isLike ? post.likes + 1 : post.likes - 1
    console.log("post:", post, post['likes'])

    return await this.postModel.findByIdAndUpdate(id, { likes: post.likes }, { new: true }).exec();
  }
}
