import React,{useState,useContext} from 'react'
import { Context } from '../Context'
import CartItem from '../components/CartItem'
function Cart() {
    const [buttonText,setButtonText] = useState("Place Order")
    const [orderPlaced, setOrderPlaced] = useState(false)
    const {cartItems,emptyCart}  = useContext(Context)

    const cartElemenets = cartItems.map(item => {
        return <CartItem key={item.id} item={item} />
    })
    const totalCost = (cartItems.length * 5.99).toLocaleString("en-US", {style: "currency", currency: "USD"})
    function placeOrder(){
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("Order Placed")
            setOrderPlaced(true)
            emptyCart()
            setButtonText("Place Order")
        },3000)
    
        setTimeout(() => {
        setOrderPlaced(false)
           },6000)
        
    }

    return (
        <main className="cart-page">
            <h1 className="cart-h1">Check out</h1>
        {cartElemenets}
        <p className="total-cost">Total:{totalCost}</p>
       
       { cartItems.length > 0 ?
        <div className="order-button">
             <button onClick={()=>placeOrder()} >{buttonText}</button>
        </div> :
        <p className="info-text">You have no items in the cart</p>
        }
       {orderPlaced && <div className="placed-order"><p>order is placed</p></div>}

        </main>
    )
}

export default Cart
