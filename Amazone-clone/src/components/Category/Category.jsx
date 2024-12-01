import React from 'react'
import {CategoryInfos} from "./categoryFullInfos"
import CategoryCard from './CategoryCard'
import classes from "./category.module.css"
function Category() {
    console.log(CategoryInfos)
return (
<section className={classes.category_container}> 
    
    {
        CategoryInfos.map((infos)=>{
           return <CategoryCard data={infos}/>
        })
    }
</section>
);
}

export default Category