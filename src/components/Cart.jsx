import { useContext } from "react"
import { ProductCountContext } from "../ContextApi/CountContext"

export const Cart = () => {
    const count = useContext(ProductCountContext);

    const { productCount } = count;
    return (
        <div>
            <span>You added {productCount} products</span>
        </div>
    )
}