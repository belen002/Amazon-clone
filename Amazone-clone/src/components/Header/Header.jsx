import React from 'react'
import classes from "./Heade.module.css"
import { IoIosSearch } from "react-icons/io";
import { GrLocation } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";
import LowerHeader from "./LowerHeader"
import {Link} from "react-router-dom"
function Header() {
return (
    <>
    <section className={classes.Header_container}>

        <div className={classes.logo_container}>

            {/* logo section */}
            <Link to ="/"><img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" /></Link>

            <span>
                <GrLocation/>
            </span>

            <div className={classes.delivery}>
                <p> Delivered to</p>
                <span>Ethiopia</span>
            </div>
            
        </div>


        <div className={classes.search}>

            <select name="" id="">
                <option value="">All</option>
            </select>

            <input type="text" placeholder='search product'
            />
            < IoIosSearch size={25}/>
            


        </div>

        {/* right side container */}

        <div className={classes.order_container}>

            <Link to ="" className={classes.language}>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png" alt="" />

                <select name='' id=''>
                    <option value="">EN</option>
                </select>
            </Link>
                
            
            <Link to ="/Auth">
                <p>Sign In</p>
                <span>Account And Lists</span>
            </Link>

            <Link to ="/orders">
                <p>returns</p>
                <span>& orders</span>
            </Link>

            <Link to ="/cart" className={classes.cart}>
                <IoCartOutline size={35}/>
                <span>0</span>
            </Link>
            
            

        </div>

    </section>
    <LowerHeader/>
    </>
);
}

export default Header