import Filter from "../copmonents/Filter/Filter";
import { products } from "../../data";
import Product from "../copmonents/Product/Product";
import { NavLink } from "react-router-dom";
import Sort from "../copmonents/Sort/Sort";
import { useState } from "react";

export default function Catalog(){
    const [sorting, setSorting] = useState('default')

    const onSortingChange = (event) => {
        setSorting(event.target.value)
    }

    const sortProducts = (sorting, products) =>{
        switch(sorting){
            case 'priceASC':
                return [...products].sort((a,b) => a.price - b.price)
            case 'priceDESC':
                return [...products].sort((a,b)=> b.price - a.price)
            case 'nameA':
                return [...products].sort((a,b)=>a.name.localeCompare(b.name))
            case 'nameZ':
                return [...products].sort((a,b)=>b.name.localeCompare(a.name))
            default:
                return products
        }
    }

    const fullSorting = sortProducts(sorting, products)

    return(
        <>
        <div className="catalog">
            <Filter />
            <div className="catalog-right">
                <div className="catalog-filter">
                    <p>Сортировать:</p>
                    <Sort sorting={sorting} onSortingChange={onSortingChange} />
                </div>
                <div className="catalog-items">
                    {fullSorting.map((product)=>(
                        <NavLink to={`/product/${product.id}`}><Product key={product.id} name={product.name} price={product.price} img={product.img} /></NavLink>   
                    ))}
                </div>
                
            </div>
        </div>

        
        </>
    )
}