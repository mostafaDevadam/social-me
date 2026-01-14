import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment, CommentDocument } from './comment.schema';
import { PostsService } from 'src/posts/posts.service';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<Comment>,
    private postService: PostsService
  ) { }

  async create(createCommentDto: any) {
    createCommentDto.likes = 0
    const createdComment = new this.commentModel(createCommentDto);
    // get post by id
    // countAllByPostId
    console.log("comment:", createdComment['post'])
    const count = await this.countAllByPostId(createdComment['post'].toString())
    console.log("countComments:", count)
    // update post with comments
    await this.postService.updateById(createdComment['post'].toString(),
      { comments: count === 0 ? 1 : count })

    return createdComment.save();
  }

  async findAll() {
    return await this.commentModel.find().exec();
  }

  async findAllByPostId(postId: string) {
    return await this.commentModel.find({ post: postId }).exec();
  }

  async findOneById(id: string) {
    return await this.commentModel.findById(id).exec();
  }

  async updateById(id: string, updateCommentDto: any) {
    return await this.commentModel.findByIdAndUpdate(id, updateCommentDto, { new: true }).exec();
  }

  async removeById(commentId: string) {
    const removed = await this.commentModel.findByIdAndDelete(commentId).exec();

    const count = await this.countAllByPostId(removed['post'].toString())
    console.log("countComments:", count)
    // update post with comments
    await this.postService.updateById(removed['post'].toString(),
      { comments: count > 0 ? count -1 : count })
    return removed

  }
  async removeMany(postId: any, commentIds: string[]) {
    const removed = await this.commentModel.deleteMany(commentIds).exec();

    //const count = await this.countAllByPostId(removed['post'].toString())
    //console.log("countComments:", count)
    // update post with comments
    await this.postService.updateById(postId,
      { comments: 0 })
    return removed

  }

  async likeComment(id: any, isLike: boolean) {
    const comment = await this.findOneById(id)
    comment.likes = isLike ? comment.likes + 1 : comment.likes - 1
    console.log("post:", comment, comment['likes'])

    return await this.commentModel.findByIdAndUpdate(id, { likes: comment.likes }, { new: true }).exec();
  }

  async countAllByPostId(postId: string) {
    return await this.commentModel.countDocuments({ post: postId }).exec();
  }
}
