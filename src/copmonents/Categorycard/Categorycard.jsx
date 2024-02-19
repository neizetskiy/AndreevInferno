import Button from "../Button/Button"
import "./Categorycard.css"


export default function Categorycard({category}){
    return(
        <>
            <div className="categorycard">
                <img src={category.img} alt="" />
                <div className="catbtn">
                    <Button padding="7px 24px" color="black" bgcolor="white" hoverbgcolor="black" hovercolor="white" href={category.path} letterspace="2px" texttransform="uppercase" >{category.name}</Button>
                </div>
                
            </div>
        </>
    )
}