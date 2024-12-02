import React, { useEffect } from 'react'
import classes from "./ProductDetails.module.css"
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { productUrl } from '../../Api/endPoint';
import ProductCard from '../../components/Product/ProductCard';
function ProductDetails() {
  const {productId} = useParams()
  const [product, setproduct] = useState([])
  console.log(productId)
  useEffect(()=>{
    axios.get(`${productUrl}/products/${productId}`).then((res)=>{
      setproduct(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <LayOut>
      <ProductCard
      product={product}
      />
    </LayOut>
  );
}

export default ProductDetails