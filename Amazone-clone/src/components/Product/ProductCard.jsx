import React from 'react'
import {Rating} from "@mui/material"
import  CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import classes from "./Product.module.css"
function ProductCard({product}) {
  const { image, title,id,rating,price } = product;
  return (
    <div className={`${classes.card_container}`}>
        <a href=""><img src={image} alt=""/></a>

        <div>
            <h3>{title}</h3>
            <div className={classes.rating}>
                {/* rating */}
                <Rating value={rating.rate} precision ={0.1}/>

                {/* count */}
                <small>{rating.count}</small>
            </div>
            <div>
                {/* priceing */}

                <CurrencyFormat amount = {price}/>
            </div>

            <button className={classes.button}>
              add to cart 
            </button>
        </div>
    </div>
  )
}


export default ProductCard