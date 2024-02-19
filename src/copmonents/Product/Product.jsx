import { useState } from "react";
import "./Product.css"
import Button from "../Button/Button";
import heartsvg from "/products/heart.svg"

export default function Product({name, img, price}){
    const [isHover, setHover] = useState(false)

    const [isLiked, setLike] = useState(false)

    const turnLike = () =>{
        setLike(!isLiked)
    }

    const handleButtonClick = (event) => {
        event.preventDefault();
        turnLike()
    }

    const styles = {
        display: isHover ? "flex" : "none"
    }



    return(
        <>
        <div className="product">
            <div className="product-img">
                <img src={img} alt={name} onMouseEnter={()=> setHover(true)} onMouseLeave={()=>setHover(false)}/>
                <div className="product-actions" style={styles} onMouseEnter={()=> setHover(true)}>
                    <Button color="black" bgcolor="white" hovercolor="white" hoverbgcolor="black">В корозину</Button>
                    <button onClick={handleButtonClick} style={{backgroundColor: isLiked ? "#fd84b4" : "white"}}  className="heartbtn"><img src={heartsvg} alt="Like" /></button>
                </div>
            </div>
            
            <h3>{name}</h3>
            <p>{price} ₽</p>
        </div>
        </>
    )
}