import { useContext, useState } from 'react'
import cartContext from '../contexts/context'

import CustomHeadComponent from '../components/custom-head'
import NavbarComponent from '../components/navbar'
import CartProductCard from '../components/cart-product-card'

export default function CartPage(){

  const {cart, actions} = useContext(cartContext)

  return(
    <div>
      <CustomHeadComponent />

      <main>
        <header>
          <NavbarComponent />
        </header>
        <div class="uk-height-medium">

        </div>
        <div className="uk-container">
          <h1>Panier</h1>
          {console.log('cart', cart)}

          {Array.isArray(cart)&&
            
            <div>
              <div className="uk-height-match uk-grid-collapse uk-child-width-1-1 uk-child-width-1-2@m" uk-grid="true">

                <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
                  {cart.map(product =>{
                    return(
                      <CartProductCard product={product} key={product._id}/>
                    )
                  })}
                </div>

                <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m uk-background-muted">
                  <h3 className="uk-card-title">Total</h3>
                  <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

              </div>
            </div>
          }
        </div>
      </main>
    </div>
  )
}