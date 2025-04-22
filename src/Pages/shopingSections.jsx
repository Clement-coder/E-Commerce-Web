import React from 'react'
import CategoryMenu from '../components/layouts/Categories'
import ProductList from '../components/layouts/cartItems'
import FlashSales from '../components/layouts/flashSales'
import Browse from '../components/layouts/browse'
import BestSellings from '../components/layouts/bestSellings'
import MoreProducts from '../components/layouts/moreProducts'
import Collections from '../components/layouts/collections'
import Deliveries from '../components/layouts/deliveries'

const shopingSections = () => {
  return (
    <div>
    <CategoryMenu/>
    <FlashSales/>
    <ProductList/>
    <Browse/>
    <BestSellings/>
    <div className="flex justify-center items-center py-8 max-w-screen-xl mx-auto px-4">
  <img 
    className="w-full " 
    src="/src/assets/enhance.png" 
    alt="Enhance" 
  />
</div>

<MoreProducts/>
<Collections/>
<Deliveries/>


    </div>
  )
}

export default shopingSections
