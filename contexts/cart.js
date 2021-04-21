import {useEffect, useState} from 'react'

const cart = () => {
  
  const [cart, setCart] = useState(
    {
      'products': [],
      'numberOfProducts': 0,
      'subtotal': 0,
      'discount': 0,
      'shipping': 0,
      'total': 0,
      'userInfos': {
        'civility': 'aaa',
        'firstname': 'aaa',
        'lastname': 'aa',
        'email': 'aa',
        'adress': 'aa',
        'zipcode': 'aa',
        'city': 'aa',
        'phone': 'aa',
      },
      'paymentMethod': 'aaa'
    }
  );

  const actions = (action) => {
    const {type, payload, quantity, discount, total} = action;

    const setProductToCart = () => {
      let indexOfProduct = cart.products.findIndex(el => el._id == payload._id);
      const nbOfProduct = quantity;
      let tempCart = [...cart.products];

      if(indexOfProduct < 0 ){
        const newProduct = {...payload, quantity: nbOfProduct};
        tempCart.push(newProduct);
        let subtotal = calcSubtotal(tempCart);
        let numberOfProducts = cart.numberOfProducts;
        let total = calcTotal(tempCart);
        setCart( {...cart, products: [...tempCart], subtotal: subtotal, numberOfProducts: numberOfProducts + 1, total: total} );
        
      }else{
        tempCart[indexOfProduct].quantity = nbOfProduct;
        let subtotal = calcSubtotal(tempCart);
        let total = calcTotal(tempCart);
        setCart( {...cart, products: [...tempCart], subtotal: subtotal, total: total} );
        
      }
    }

    const deleteFromCard = () => {
      const newCart = cart.products.filter(el => el._id !== payload._id);
      let subtotal = calcSubtotal(newCart);
      let numberOfProducts = cart.numberOfProducts;
      setCart( {...cart, products: [...newCart], subtotal: subtotal, numberOfProducts: numberOfProducts - 1 } );
    }

    const calcSubtotal = (cart) => {
      let subtotal = 0;
      if(cart.length != 0){
        cart.map(product => {
          let totalForThisProduct = product.price * product.quantity;
          subtotal = subtotal + totalForThisProduct;
        });
        //setCart( { ...cart, subtotal: result } );
      }
      return subtotal;
    }

    const calcTotal = (productsList) => {
      let total = 0;
      if(productsList.length != 0){
        productsList.map(product => {
          let totalForThisProduct = product.price * product.quantity;
          total = total + totalForThisProduct;
        });
        total = total - (cart.discount * total);
      }
      return total;
    }

    const setDiscount = () => {
      setCart( {...cart, discount: discount});
    }

    switch(type){
      case 'addToCard':
        setProductToCart();
        return cart;
      case 'deleteFromCard':
        deleteFromCard();
        return cart;
      case 'setDiscount':
        setDiscount();
        return cart;
      default:
        return cart;
    }

  }

  return {cart, actions}
}

export default cart;