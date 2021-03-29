import Link from 'next/link'
import { useContext, useState } from 'react'
import cartContext from '../contexts/context'

export default function cartProductCard({product}){

  const {cart, actions} = useContext(cartContext)
  console.log('product.quantity', product.quantity);
  let initialQuantity = product.quantity
  const [quantity, setQuantity] = useState(initialQuantity)

  let ProductPrice = (initialQuantity * product.price)

  const handleMinusOne = ()=>{
    quantity <= 1 ? setQuantity(1) : setQuantity(quantity - 1)
    actions({type: 'addToCard', payload: product, quantity: quantity})
  }

  const handlePlusOne = ()=>{
    quantity >= 5 ? setQuantity(5) : setQuantity(quantity + 1)
    actions({type: 'addToCard', payload: product, quantity: quantity})
  }

  const handleDeleteItem = ()=>{
    actions({type: "deleteFromCard", payload: product})
  }

  return(

    <div>

      <div className="uk-grid-collapse uk-margin-top uk-margin-bottom" uk-grid="true" key={product._id}>

        <div className="uk-width-1-4">
          <img src={product.pics[1]} width="100%" height="100%" alt="" />
        </div>

        <div className="uk-width-3-4">
          <div className="uk-width-1-1 uk-inline">
            <button className="uk-position-top-right" onClick={() => handleDeleteItem()}><i class="las la-times"></i></button>
            <span className="uk-display-block">{product.name}</span>
          </div>
          <span className="uk-display-block">{product.description}</span>
          
          <div className="" uk-grid="true">

            {/* <div className=""><span className="">{item.price[$numberDecimal]}</span></div> */}

            <div className="">

              <button className="uk-button uk-button-text uk-button-text-no-border" onClick={() => handleMinusOne()}>
                <i className="las la-minus la-1x"></i>
              </button>

              <button className="uk-button uk-button-text uk-button-text-no-border">{product.quantity}</button>

              <button className="uk-button uk-button-text uk-button-text-no-border" onClick={() => handlePlusOne()}>
                <i className="las la-plus la-1x"></i>
              </button>

            </div>

            <div className="">{ProductPrice}</div>

          </div>
          
        </div>

      </div>
      <hr />

    </div>

  )

}