import React, { useEffect } from 'react'
import classes from "./ProductDetails.module.css"
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { productUrl } from '../../Api/endPoint';
import ProductCard from '../../components/Product/ProductCard';
import Loader from '../../Loader/Loader';
function ProductDetails() {
  const {productId} = useParams()
  const [product, setproduct] = useState([])
  console.log(productId)
  const [isLoading, setisLoading] = useState(false)
  useEffect(()=>{
    setisLoading(true)
    axios.get(`${productUrl}/products/${productId}`).then((res)=>{
      setproduct(res.data)
      setisLoading(false)
    }).catch((err)=>{
      console.log(err)
      setisLoading(false)
    })
  },[])
  return (
    <LayOut>
      {isLoading?(<Loader/>):(<ProductCard product={product}
      flex = {true}
      renderDesc={true}

      />)}
    </LayOut>
  );
}

export default ProductDetails