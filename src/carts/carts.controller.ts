import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CartsService } from './carts.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('carts')
@UseGuards(AuthGuard)
export class CartsController {
    constructor(private cartService: CartsService) { }


    @Post("/product/:productId/user/:userId")
    async addProductIntoCart(@Param('productId') productId: string, @Param('userId') userId: string,
    ) {
        // createCartDto.product = productId;
        //createCartDto.user = userId;
        return this.cartService.addProductIntoCart(productId, userId);
    }

    @Patch("/product/:productId/cart/:cartId")
    async removeProductFromCart(@Param('productId') productId: string, @Param('cartId') cartId: string,
        @Body() body) {
        return this.cartService.removeProductFromCart(productId, cartId);
    }

    @Get("/user/:userId")
    async getCartByUser(@Param('userId') userId: string) {
        return this.cartService.getCartByUser(userId);
    }

    @Patch("/:cartdId/ordered/")
    async orderedCart(@Param('cartdId') cartdId: string, @Body() body: { isOrdered: boolean }) {
       return this.cartService.updateIsOrderedCart(cartdId, body.isOrdered);
    }


}
