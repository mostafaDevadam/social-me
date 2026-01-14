import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cart } from './cart.schema';
import { Model } from 'mongoose';
import { ProductsService } from 'src/products/products.service';
import { OrdersService } from 'src/orders/orders.service';

@Injectable()
export class CartsService {

    constructor(
        @InjectModel(Cart.name) private cartModel: Model<Cart>,
        private productService: ProductsService,
        private orderService: OrdersService,
    ) { }


    async addProductIntoCart(productId: any, userId: any) {
        // get product
        // product price
        // check if cart exist or get cart then total_price += product.price
        // update cart
        const product = await this.productService.findById(productId);
        console.log("products:", product)
        const cart = await this.cartModel.findOne({ user: userId });
        if (cart) {
            let total_price = 0
            if (cart?.total_price) {
                total_price = Number(cart.total_price) + Number(product.price);
            } else {
                total_price = Number(product?.price);
            }


            return this.cartModel.findByIdAndUpdate(cart._id, { $set: { total_price: total_price.toString(), products: cart.products.concat(productId) } }, { new: true });
        } else {
          //  const created = await this.cartModel.create({ total_price: product.price, products: [productId], user: userId });

            const createdPost = new this.cartModel({ total_price: product.price, products: [productId], user: userId });
            return createdPost.save();
        }

    }
    async removeProductFromCart(productId, cartId) {
        // get product by productId
        // get cart by cartId
        // total_price -= product.price
        // update cart with total_price

        const product = await this.productService.findById(productId);
        console.log("products:", product)
        const cart = await this.cartModel.findById(cartId);
        if (cart) {
            let total_price = 0
            if (cart?.total_price) {
                total_price = Number(cart.total_price) - Number(product.price);
            } else {
                total_price = Number(cart.total_price);
            }


            const indexToRemove = cart.products.indexOf(productId)
            if (indexToRemove !== -1) {
                // Step 2: Update the document
                const updateKey = `products.${indexToRemove}`;
                const one = await this.cartModel.updateOne(
                    { _id: cartId },
                    { $unset: { [updateKey]: 1 } }, // Unset the element at the specific index
                    
                );
                console.log("one:", one)
               const two = await this.cartModel.updateOne(
                    { _id: cartId },
                    { $pull: { products: null },  },// Pull all null values (which includes the unset element)
                );
                console.log("two:", two)
            }

            const updatedCart = await this.cartModel.findByIdAndUpdate(cart._id, { total_price: total_price.toString() }, { new: true });
            return updatedCart


            /*const updatedCart = await this.cartModel.findByIdAndUpdate(cart._id, { total_price: total_price.toString(), $pull: { products: productId } }, { new: true });
            if (updatedCart && updatedCart.products.length === 0) {
                const updatedCart$ = await this.cartModel.findByIdAndUpdate(cart._id, { total_price: "0" }, { new: true });
                return updatedCart$
            }
            return updatedCart*/
        } else {
            // return this.cartModel.findByIdAndUpdate(cartId, { total_price: product.price, products: [productId], user: userId });
            return false
        }

        // return this.cartModel.findByIdAndUpdate(cartId, { $pull: { products: productId } }, { new: true });
    }
    async getCartByUser(userId) {
        return await this.cartModel.findOne({ user: userId }).populate('products').exec();
    }

    async updateIsOrderedCart(cartdId, isOrdered) {
        const updated = await this.cartModel.findByIdAndUpdate(cartdId, { $set: { isOrdered: isOrdered } }, { new: true });

        if(isOrdered){
            const order = await this.orderService.createOrder(updated.user,{ total_price: updated.total_price, products: updated.products })
            if(!order) return false
            console.log("order:", order)
        }


        return updated
    }

}
