import { createContext, useReducer } from 'react';

const initialState = {};
const CartContext = createContext(initialState);
const { Provider } = CartContext;

const CartProvider = ({children}) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type){
      case 'addProduct':
        const product = action.productToAdd;
        const test = {name:'aaaa'}
        const newState = {product};
        console.log('cart= ', newState);
        return newState;
      default:
        throw new Error();
    };
  }, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};


export { CartContext, CartProvider }