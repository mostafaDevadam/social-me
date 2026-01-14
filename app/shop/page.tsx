import React from 'react'
import ProductsList from '../_components/ProductsList'
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ORDER_TYPE, PRODUCT_TYPE } from '../_types/types'
import { getID } from '../_lib/id'
import { getAllProducts, getAllProductsByUserId } from '../api/products'
import ProductDialog from '../_components/ProductDialog'
import { createProductAction } from '../actions/product.actions'
import { getAllOrdersByUser } from '../api/orders'
import OrdersList from '../_components/OrdersList'

const ShopPage = async () => {

  const userId = await getID()
  const products: PRODUCT_TYPE[] = await getAllProducts()
  console.log("products:", products)
  const user_products: PRODUCT_TYPE[] = await getAllProductsByUserId(userId)
  console.log("user_products:", user_products)
  const user_orders: ORDER_TYPE[] = await getAllOrdersByUser()
  console.log("user_orders:", user_orders)


  return (


    <div className="flex flex-col gap-5 min-h-screen items-center justify-items-center bg-zinc-50 font-sans dark:bg-black">

      <div className='flex flex-row justify-end w-full'>
       {/* <Link href="/shop/products/new" className='mt-3 hover:bg-sky-500 hover:rounded-md hover:text-white px-2 py-2 border rounded-md'>New Product</Link>
         */}
        <ProductDialog action={createProductAction}  userId={userId} type_action={"create"}  />
      </div>

      <div className="text-center mx-auto flex flex-col justify-center w-full">
        <div className="mx-auto mt-10 w-full">
          <Tabs defaultValue="products" className="w-[1000px]">
            <TabsList>
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="my_products">MyProducts</TabsTrigger>
              <TabsTrigger value="orders">orders</TabsTrigger>
            </TabsList>
            <TabsContent value="products" className='border'>
              <ProductsList products={products} userId={userId} />
            </TabsContent>
            <TabsContent value="my_products">
              <ProductsList products={user_products} userId={userId} />
            </TabsContent>
            <TabsContent value="orders">
               <OrdersList orders={user_orders} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default ShopPage