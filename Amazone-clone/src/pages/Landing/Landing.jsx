import React from 'react'
import LayOut from "../../components/LayOut/LayOut"

import Carousel from "../../components/Carousel/Carousel"
import Product from "../../components/Product/Product";
import Category from '../../components/Category/Category';


function Landing() {
  return (
    
      <LayOut>
        <Carousel/>
        <Category/>
        <Product/>
      </LayOut>

  );
}

export default Landing