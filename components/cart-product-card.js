import Link from 'next/link'
import { useContext, useState } from 'react'
import cartContext from '../contexts/context'

export default function cartProductCard({item}){

  const {cart, actions} = useContext(cartContext)
  //const id = item[_id]
  //let initialQuantity = cart.id[quantity]
  const [quantity, setQuantity] = useState(initialQuantity)

  const handleMinusOne = ()=>{
    quantity <= 1 ? setQuantity(1) : setQuantity(quantity - 1)
    actions({type: 'addToCard', payload: item, quantity: quantity})
  }

  const handlePlusOne = ()=>{
    quantity >= 5 ? setQuantity(5) : setQuantity(quantity + 1)
    actions({type: 'addToCard', payload: item, quantity: quantity})
  }

  const handleDeleteItem = ()=>{
    actions({type: "deleteFromCard", payload: item})
  }

  return(

    <div>

      <div className="uk-grid-collapse uk-margin-top uk-margin-bottom " uk-grid="true" key={item.id}>

        <div className="uk-width-1-4">
          <img src={item.pics[1]} width="100%" height="100%" alt="" />
        </div>

        <div className="uk-width-3-4">
          <div className="uk-width-1-1 uk-inline">
            <button className="uk-position-top-right" onClick={() => handleDeleteItem()}><i class="las la-times"></i></button>
            <span className="uk-display-block">{item.name}</span>
          </div>
          <span className="uk-display-block">{item.description}</span>
          
          <div className="" uk-grid="true">

            {/* <div className=""><span className="">{item.price[$numberDecimal]}</span></div> */}

            <div className="">

              <button className="uk-button uk-button-text uk-button-text-no-border" onClick={() => handleMinusOne()}>
                <i className="las la-minus la-1x"></i>
              </button>

              <button className="uk-button uk-button-text uk-button-text-no-border">{item.quantity}</button>

              <button className="uk-button uk-button-text uk-button-text-no-border" onClick={() => handlePlusOne()}>
                <i className="las la-plus la-1x"></i>
              </button>

            </div>

            <div className="">sumOfProductQty</div>

          </div>
          
        </div>

      </div>
      <hr />

    </div>

  )

}