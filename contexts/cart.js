import {useState} from 'react'

const cart = () => {
  
  const [cart, setCart] = useState([]);

  const actions = (action) => {
    const {type, payload, quantity} = action;

    const setProductToCart = () => {
      let indexOfProduct = cart.findIndex(el => el._id == payload._id);
      const nbOfProduct = quantity;
      let tempCart = [...cart];

      if(indexOfProduct < 0 ){
        const newProduct = {...payload, quantity: nbOfProduct};
        tempCart.push(newProduct);
        setCart([...tempCart]);
      }else{
        tempCart[indexOfProduct].quantity = nbOfProduct;
        setCart([...tempCart]);
      }
    }

    switch(type){
      case 'addToCard':
        setProductToCart();
        return cart
      case 'deleteFromCard':
        const newCart = cart.filter(el => el._id !== payload._id)
        setCart(newCart);
        return cart
      default:
        return cart;
    }

  }

  return {cart, actions}
}

export default cart;