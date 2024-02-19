import "./Banner.css"
import bannerimg from "/banner/banner.png"

export default function Banner(){
    return(
        <>
            <div className="banner">
                <img src={bannerimg} alt="" />
                <p>INFERNO</p>
            </div>
        </>
    )
}