import { AuthGuard } from 'src/auth/auth.guard';
import { ProductsService } from './products.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';

@Controller('products')
@UseGuards(AuthGuard)
export class ProductsController {
    constructor(private productsService: ProductsService) { }

    @Post("/user/:userId")
    async createProductByUserID(@Param("userId") userId: string,
        @Body() createProductDto: { name: string, description: string, price: number, currency: string, user?: any }) {
        createProductDto.user = userId
        return this.productsService.createByUserID(createProductDto);
    }

    @Get("/all")
    async getAllProducts() {
       return this.productsService.findAll();
    }

    @Get("/all/user/:userId")
    async getAllProductsByUserID(@Param("userId") userId: string) {
       return this.productsService.findAllByUserID(userId);
    }

    @Get("/:id")
    async getProductById(@Param("id") id: string) {
      return this.productsService.findById(id);
    }

    @Patch("/:id")
    async updateProductById(@Param("id") id: string, @Body() updateProductDto) {
        return this.productsService.updateById(id, updateProductDto);
    }

    @Delete("/:id")
    async deleteProductById(@Param("id") id: string) {
        return this.productsService.removeById(id);
    }
}
