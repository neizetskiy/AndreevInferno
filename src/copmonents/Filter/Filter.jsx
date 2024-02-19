import "./Filter.css"
import filtersvg from "/catalog/filter.svg"
import { categories } from "/data";
import SizeButton from "../SizeButton/SizeButton";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import { useState } from "react";
export default function Filter(){
    const [priceaccord, setPriceAccord] = useState(false)
    const [sizeaccord, setSizeAccord] = useState(false)


    return(
        <>
        <div className="filter">
            <div className="filter-head">
                <h3>Фильтр</h3>
                <img src={filtersvg} alt="filtericon" />
            </div>
            <hr />
            <div className="filter-category">
                {categories.map((category)=>(
                    <button className="filter-cat" key={category.id}>
                        <p>{category.name}</p>
                        <p>›</p>
                    </button>
                ))}
            </div>

            <hr />

            <div className="filter-price">
                <button className="filter-btn" onClick={() => setPriceAccord(!priceaccord)}>
                    <p>Цена</p>
                    <p>▾</p>
                </button>
                <div className="filter-content" style={{display: priceaccord ? "block" : "none"}}>
                    <input type="range" name="" id="" />
                </div>
            </div>

            <hr />

            <div className="filter-price">
                <button className="filter-btn" onClick={() => setSizeAccord(!sizeaccord)}>
                    <p>Размер</p>
                    <p>▾</p>
                </button>
                <div className="filter-content" style={{display: sizeaccord ? "block" : "none"}}>
                    <div className="filter-size">
                        <SizeButton>XS</SizeButton>
                        <SizeButton>S</SizeButton>
                        <SizeButton>M</SizeButton>
                        <SizeButton>L</SizeButton>
                        <SizeButton>XL</SizeButton>
                    </div>
                </div>
            </div>

            <SecondaryButton color="white" bgcolor="rgba(0, 0, 0, 0.6)" padding="15px 85px" borderrad="10px" hoverbgcolor="black" hovercolor="white">Применить</SecondaryButton>
        </div>
        </>
    )
}