import { useParams } from "react-router-dom";
import { products } from "../../data";
import EmptyError from "../copmonents/EmptyError/EmptyError";
import { useState } from "react";
import SizeButton from "../copmonents/SizeButton/SizeButton";
import SecondaryButton from "../copmonents/SecondaryButton/SecondaryButton";

export default function Productpage(){

    const {id} = useParams()

    const product = products.find(product => product.id === parseInt(id))

    if(!product){
        return(
            <>
            <EmptyError />
            </>
        )
    }

    return(
        <>
        <div className="container">
            <div className="productpage">
                <div className="productpage-images">
                    <div className="subimages">
                        <img src={product.img} alt="" />
                        <img src={product.img} alt="" />
                        <img src={product.img} alt="" />
                    </div>
                    <img src={product.img} alt="" className="main-img" />
                </div>
                <div className="productpage-text">
                    <h4>{product.name}</h4>
                    <h5>{product.price} ₽</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, officia!</p>
                    <hr />
                    <div className="choose-color">
                        <p className="color">Цвет</p>
                        <div className="colors">
                            {product.colors.map((color)=>(
                                <button style={{backgroundColor: color}} className="colorbtn"></button>
                            ))}
                        </div>
                    </div>
                    <hr />
                    <div className="choose-color">
                        <p className="color">Цвет</p>
                        <div className="colors">
                            {product.sizes.map((size)=>(
                                <SizeButton>{size}</SizeButton>
                            ))}
                        </div>
                    </div>

                    <hr />

                    <div className="productpage-actions">
                        <SecondaryButton color="black" bgcolor="#F0F0F0" hoverbgcolor="black" hovercolor="white" padding="16px 34px" borderrad="10px">В избранное</SecondaryButton>
                        <SecondaryButton color="white" bgcolor="#9F7D5E" hoverbgcolor="black" hovercolor="white" padding="16px 160px" borderrad="10px">В корзину</SecondaryButton>
                    </div>
                    
                </div>
            </div>
        </div>
        
        </>
    )
}