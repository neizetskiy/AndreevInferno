import { useState } from "react"
import { NavLink } from "react-router-dom"
import "./SecondaryButton.css"


export default function SecondaryButton({color, bgcolor, padding, href, children, hovercolor, hoverbgcolor, borderrad}){
    const [isHover, setHover] = useState(false)

    const style = {
        color: isHover ? hovercolor: color,
        backgroundColor: isHover ? hoverbgcolor: bgcolor,
        padding: padding,
        borderRadius: borderrad
    }
   

    return(
        <>
        <NavLink to={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={style} className="sbutton">{children}</NavLink>
        </>
    )
}