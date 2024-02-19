import { useState } from "react"
import { NavLink } from "react-router-dom"
import "./Button.css"
export default function Button({color, bgcolor, href, children, hovercolor, hoverbgcolor}){
    const [isHover, setHover] = useState(false)

    const style = {
        color: isHover ? hovercolor: color,
        backgroundColor: isHover ? hoverbgcolor: bgcolor,
    }
   

    return(
        <>
        <NavLink to={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={style} className="button">{children}</NavLink>
        </>
    )
}