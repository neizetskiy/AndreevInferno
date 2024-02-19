import Button from "../Button/Button"
import "./EmptyError.css"

export default function EmptyError(){
    return(
        <>
        <div className="error">
            <div className="error-items">
                <p>error 404 - че вы тут забыли?</p>
            </div>
        </div>
        </>
    )
}