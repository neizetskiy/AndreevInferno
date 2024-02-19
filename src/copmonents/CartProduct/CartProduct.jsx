
import "./CartProduct.css"

export default function CartProduct({cart}){
    return(
        <>
        <div className="cartproduct">
            <div className="cartproduct-img">
                <img src={cart.img} alt="" />
            </div>
            <div className="cartproduct-text">
                <h5>{cart.name}</h5>
                <p>Размер: {cart.size}</p>
                <p>Цвет: {cart.color}</p>
                <h6>{cart.price} ₽</h6>
            </div>
            <button className="delbtn">Удалить</button>
        </div>
        </>
    )
}