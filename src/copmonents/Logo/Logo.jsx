import { NavLink } from "react-router-dom"
import "./Logo.css"
export default function Logo(){
    return(
        <>
         <NavLink to="/" className="logo">INFERNO</NavLink>
        </>
    )
}