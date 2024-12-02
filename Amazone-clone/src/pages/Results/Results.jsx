import React, { useEffect , useState} from 'react'
import classes from "./Results.module.css"
import LayOut from '../../components/LayOut/LayOut'
import {useParams} from "react-router-dom"
import axios from "axios"
import {productUrl}  from "../../Api/endPoint"
import ProductCard from '../../components/Product/ProductCard'
import Loader from '../../Loader/Loader'
function Results() {
  const[results,setResults] = useState([]);
  const [isLoading, setisLoading] = useState(false)
  const {CategoryName} = useParams() 
  useEffect(()=>{
    setisLoading(true)
    axios.get(`${productUrl}/products/category/${CategoryName}`)
      .then((res) => {
        setResults(res.data)
        console.log(res.data)
        setisLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false)
      });
      console.log(CategoryName)
  },[CategoryName])

  
  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category /{CategoryName}</p>
          <hr />
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </LayOut>
  );
}

export default Results