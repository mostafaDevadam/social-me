import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {

    constructor(
        @InjectModel(Product.name) private productModel: Model<Product>,
    ) { }



    async createByUserID(createProductDto: { name: string, description: string, price: number, currency: string, user?: any }) {
    const createdPost = new this.productModel(createProductDto);
    return createdPost.save();
    }
    async findAll() {
       return await this.productModel.find().exec();
    }
    async findAllByUserID(userId) {
        return await this.productModel.find({ user: userId }).exec();
    }
    async findById(id) {
       return await this.productModel.findById(id).exec();
    }

    async updateById(id, updateProductDto) {
      return await this.productModel.findByIdAndUpdate(id, updateProductDto, { new: true }).exec();
    }
    async removeById(id) {
         return await this.productModel.findByIdAndDelete(id).exec();
    }
}
