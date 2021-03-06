import {useState} from 'react'

const cart = () => {
  const [cart, setCart] = useState([]);

  const actions = (action) => {
    const {type, payload} = action;

    switch(type){
      case 'addToCard':
        setCart([...cart, payload]);
        console.log(cart)
        return
      default:
        return cart;
    }

  }

  return {cart, actions}
}

export default cart;