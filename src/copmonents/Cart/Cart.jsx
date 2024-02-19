import "./Cart.css"

import { carts } from "../../../data"
import CartProduct from "../CartProduct/CartProduct"

export default function Cart(){
    return(
        <>
        <div className="ReactModal__Content">
            <h2>Корзина</h2>
            <div className="cart-items">
                <div className="cart-products">
                    {carts.map((cart)=>(
                        <CartProduct key={cart.id} cart={cart} />
                    ))}
                </div>
                <div className="cart-info">
                    <h5>Сумма заказа</h5>
                    <div className="cart-info-price">
                        <p>Цена товара</p>
                        <h6>5400.00 ₽</h6>
                    </div>
                    <div className="cart-info-price">
                        <p>Доставка</p>
                        <h6>0 ₽</h6>
                    </div>
                    <hr />
                    <div className="cart-info-price">
                        <h5>Итого</h5>
                        <h6>5400.00 ₽</h6>
                    </div>
                    <div className="cart-info-promo">
                        <input className="promo" type="text" placeholder="🔖 Промокод" />
                        <a className="promobtn" href="">Ввод</a>
                    </div>
                    <div className="cart-info-btn">
                        <a href="">Перейти к покупке →</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}