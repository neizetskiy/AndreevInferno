import Banner from "../copmonents/Banner/Banner";
import Categorycard from "../copmonents/Categorycard/Categorycard";
import { categories } from "../../data";
import { products } from "../../data";
import { NavLink } from "react-router-dom";
import Product from "../copmonents/Product/Product";
import Button from "../copmonents/Button/Button";
import Footer from "../copmonents/Footer/Footer";

export default function Homepage(){
    return(
        <>
        <Banner />
        <div className="container">
            <div className="categories-cards">
                {categories.map((category)=>(
                    <Categorycard key={category.id} category={category}/>
                ))}
            </div>

            <div className="sales">
                <div className="sales-head">
                    <p className="title">АКЦИИ</p>
                    <NavLink to="/catalog" className="headlink">ПЕРЕЙТИ В КАТАЛОГ</NavLink>
                </div>
                <div className="sales-items">
                    <NavLink to={`/product/${products[0].id}`}><Product {...products[0]} /></NavLink>
                    
                    <NavLink to={`/product/${products[1].id}`}><Product {...products[1]} /></NavLink>
                    <NavLink to={`/product/${products[2].id}`}><Product {...products[2]} /></NavLink>
                    <NavLink to={`/product/${products[3].id}`}><Product {...products[3]} /></NavLink>
                </div>
                <div className="sales-button">
                    <Button bgcolor="#373737" color="white" hoverbgcolor="grey" hovercolor="white" href="/catalog">показать еще</Button>
                </div>
            </div>
        </div>

       
        
        </>
    )
}