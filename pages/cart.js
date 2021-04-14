import { useContext, useState } from 'react';
import cartContext from '../contexts/context';
import CustomHeadComponent from '../components/custom-head';
import NavbarComponent from '../components/navbar';
import CartProductCard from '../components/cart-product-card';
import FooterComponent from '../components/footer';

export default function CartPage(){

  const {cart, actions} = useContext(cartContext)

  return(
    <div>
      <CustomHeadComponent />
      <main>
        <header>
          <NavbarComponent />
        </header>
        <div className="uk-height-medium">
        </div>
        <section className="uk-container uk-container-xlarge">
          <h1>Panier</h1>
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
                {/* TODO : add leader */}
                <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m uk-background-muted">
                  <h3 className="uk-card-title">Total</h3>
                  <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
          }
        </section>
        <hr />
        <section className="uk-container uk-container-xlarge">
          <FooterComponent />
        </section>
      </main>
    </div>
  )
}