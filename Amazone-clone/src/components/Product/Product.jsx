import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from "axios"
import ProductCard from './ProductCard';
import Classes from "./product.module.css"


function Product() {
        const [products, setProducts] = useState()
            useEffect(()=>{
            axios.get('https://fakestoreapi.com/products').then((res)=>{
                setProducts(res.data)
            }).catch((err)=>{
                console.log(err)
            })
        },[])
        console.log(products)
return (
    <section className={Classes.products_container}>
        {
            products?.map((singleProduct)=>{
                return <ProductCard product = {
                    singleProduct} key = {
                        singleProduct.id}/>
                    })
        }
    </section>
)
}

export default Product