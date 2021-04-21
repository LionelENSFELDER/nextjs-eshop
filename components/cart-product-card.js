import Link from 'next/link'
import { useContext, useState } from 'react'
import cartContext from '../contexts/context'

export default function cartProductCard({product}){

  const {cart, actions} = useContext(cartContext);
  
  let initialQuantity = product.quantity;
  const [quantity, setQuantity] = useState(initialQuantity);

  const unitPrice = product.price;
  const [productPrice, setProductPrice] = useState(unitPrice * product.quantity);
  
  const calcProductPrice = () => {
    let price = product.quantity * unitPrice;
    setProductPrice(parseFloat(price.toFixed(2)));
  }

  const handleMinusOne = () => {
    quantity <= 1 ? setQuantity(1) : setQuantity(quantity - 1);
    actions({type: 'addToCard', payload: product, quantity: quantity});
    setInterval(calcProductPrice(), 1000);
  }

  const handlePlusOne = () => {
    quantity >= 5 ? setQuantity(5) : setQuantity(quantity + 1);
    actions({type: 'addToCard', payload: product, quantity: quantity});
    setInterval(calcProductPrice(), 1000);
  }

  const handleDeleteItem = () => {
    actions( { type: "deleteFromCard", payload: product } );
  }

  return(
    <div>
      <div className="uk-grid-collapse uk-margin-medium-top uk-margin-medium-bottom" uk-grid="true" key={product._id}>
        <div className="uk-width-1-5">
          <Link href={'/products/' + product._id}>
            <a className="uk-link-toggle">
              <img src={product.pics[1]} width="100px" alt="" />
            </a>
          </Link>
        </div>
        <div className="uk-width-3-4">
          <div className="uk-width-1-1 uk-inline">
            <a className="uk-position-top-right uk-text-lead" onClick={() => handleDeleteItem()}>
              <i className="las la-times"></i>
            </ a>
            <span className="uk-display-block uk-text-bold uk-margin-bottom">{product.name}</span>
          </div>
          <div className="" uk-grid="true">
            <div className="">
              €{productPrice}
            </div>
            <div className="">
              <button className="uk-button uk-button-text uk-button-text-no-border uk-margin-left uk-margin-right" onClick={() => handleMinusOne()}>
                <i className="las la-minus la-1x"></i>
              </button>
              <button className="uk-button uk-button-text uk-button-text-no-border uk-margin-right">{product.quantity}</button>
              <button className="uk-button uk-button-text uk-button-text-no-border uk-margin-right" onClick={() => handlePlusOne()}>
                <i className="las la-plus la-1x"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="uk-divider-small"></hr>
    </div>
  )
}