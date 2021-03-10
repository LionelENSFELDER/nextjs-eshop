import {useState} from 'react'

const cart = () => {
  
  const [cart, setCart] = useState([]);
  console.log('cart state ', cart);

  const actions = (action) => {
    const {type, payload} = action;

    const beforeAddToCart = () => {
      let indexOfProduct = cart.findIndex(el => el._id == payload._id);
      let tempCart = [...cart];

      if(indexOfProduct < 0 ){
        const newProduct = {...payload, quantity: 1};
        tempCart.push(newProduct);
        setCart([...tempCart]);
      }else{
        tempCart[indexOfProduct].quantity += 1;
        setCart([...tempCart]);
      }
    }

    const deleteOne = () => {
      let indexOfProduct = cart.findIndex(el => el._id == payload._id);
      let tempCart = [...cart];

      if(indexOfProduct < 0 ){
        
      }else{

        if(tempCart[indexOfProduct].quantity == 1){

        }else{
          tempCart[indexOfProduct].quantity -= 1;
          setCart([...tempCart]);
        }

      }
    }

    switch(type){
      case 'addToCard':
        beforeAddToCart();
        return cart
      case 'deleteFromCard':
        const newCart = cart.filter(el => el.id !== payload.id)
        setCart(newCart);
        return cart
        case 'addOne':
          beforeAddToCart();
          return cart
        case 'deleteOne':
          deleteOne();
          return cart
      default:
        return cart;
    }

  }

  return {cart, actions}
}

export default cart;