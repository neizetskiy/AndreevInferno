import "./SearchProduct.css"

export default function SearchProduct({searchproduct}){
    return(
        <>
            <div className="searchproduct">
                <div className="searchproduct-img">
                    <img src={searchproduct.img} alt="" className="searchimg" />
                </div>
                <div className="searchproduct-text">
                    <h4>{searchproduct.name}</h4>
                    <p>{searchproduct.price} ₽</p>
                </div>
            </div>
        </>
    )
}