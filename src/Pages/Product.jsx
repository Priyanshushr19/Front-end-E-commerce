import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrums from '../Components/Breadcrums/BreadCrums';
import ProductDisplay from '../Components/ProductDisplay';
import Description from '../Components/Description';
import Related from '../Components/Related';

export default function Product() {
  const {all_product}=useContext(ShopContext)
  const {productId}=useParams();
  const product=all_product.find((e)=>e.id===parseInt(productId))
  return (
    
    <div><BreadCrums product={product}/>
    <ProductDisplay product={product}/>
    <Description/>
    <Related/>
    </div>

  )
}
