import {useState} from 'react'

const cart = () => {
  
  const [cart, setCart] = useState([]);
  console.log('cart state ', cart);

  const actions = (action) => {
    const {type, payload} = action;
    function isProduct(id){
      return 
    }

    switch(type){
      case 'addToCard':
        setCart([...cart, payload]);
        return cart
      case 'deleteFromCard':
        const newCart = cart.filter(el => el.id !== payload.id)
        setCart(newCart);
        return cart
      default:
        return cart;
    }

  }

  return {cart, actions}
}

export default cart;