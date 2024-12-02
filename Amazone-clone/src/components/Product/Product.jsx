import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from "axios"
import ProductCard from './ProductCard';
import Classes from "./product.module.css"
import Loader from '../../Loader/Loader';


function Product() {
        const [products, setProducts] = useState()
        const [isLoading, setisLoading] = useState(false);
            useEffect(()=>{
                setisLoading(true)
            axios.get('https://fakestoreapi.com/products').then((res)=>{
                setProducts(res.data)
                setisLoading(false)
            }).catch((err)=>{
                console.log(err)
                setisLoading(false)
            })
        },[])
        console.log(products)
return (
<>
    {isLoading ? (
    <Loader />
    ) : (
<section className={Classes.products_container}>
        {products?.map((singleProduct) => {
        return <ProductCard product={singleProduct} key={singleProduct.id} />;
        })}
    </section>
    )}
</>
);
}

export default Product