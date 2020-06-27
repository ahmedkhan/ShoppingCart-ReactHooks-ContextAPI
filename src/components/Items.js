import React,{useContext} from 'react'
import { CartContext } from '../Context/CartContext';
export const Items = (props) => {
  const [cart, setCart] = useContext(CartContext);
    
  const addToCart = () => {
   const Items = { name: props.name, price: props.price };
    setCart(currentState => [...currentState, Items]);
  }
    return (
        <div>
        <h2>{props.name}</h2>
        <h4>{props.price}</h4>
        <button onClick={addToCart}>Add to cart</button>
        <hr />
        </div>
    )
}
