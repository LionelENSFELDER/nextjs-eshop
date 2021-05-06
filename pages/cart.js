import { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import cartContext from '../contexts/context';
import CustomHeadComponent from '../components/custom-head';
import NavbarComponent from '../components/navbar';
import CartProductCard from '../components/cart-product-card';
import FooterComponent from '../components/footer';

export default function CartPage() {

  const { cart, actions } = useContext(cartContext);

  var discount = cart.discount;
  var subtotal = cart.subtotal;
  var total = cart.subtotal;

  // useEffect(() => {
  //   displayTotal();
  //   actions( { type: 'setTotal', total: total } );
  // }, [cart.discount]);

  const displayTotal = () => {
    discount = cart.discount;
    total = subtotal - ( subtotal * discount);
    console.log(cart.discount, discount, total);
    return total;
  }

  const promoCodes = [
    {
      'code' : 'french',
      'discount' : 0.1,
      'time' : 604800,
      'start' : "01012021"
    },
    {
      'code' : 'black',
      'discount' : 0.5,
      'time' : 604800,
      'start' : "16112021"
    }
  ]

  // const setDiscount = (e) => {
  //   let discount = 0;
  //   promoCodes.forEach(element => {
  //     if(element.code === e.target.value){
  //       discount = element.discount;
  //     }
  //     actions({ type: 'setDiscount', discount: discount});
  //   }); 
  // }

  return (
    <div>
      <CustomHeadComponent />
      <main>
        <header>
          <NavbarComponent />
        </header>
        <div className="uk-height-medium"></div>
        <section className="uk-container uk-container-xlarge uk-margin-xlarge-bottom">
          {Array.isArray(cart.products) &&
            <div className="uk-container">
              <div className="uk-grid-large" uk-grid="true">
                <div className="uk-width-1-1 uk-width-3-5@m">
                  <div className="uk-card">
                    <h2 className="uk-text-bold">Panier</h2>
                    {cart.products.map(product => {
                      return (
                        <CartProductCard product={product} key={product._id} />
                      )
                    })}
                    <div className="uk-text-left">
                      <Link href="/">
                        <a className="uk-button uk-button-secondary">Continuer mes achats</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="uk-width-1-1 uk-width-2-5@m uk-background-muted uk-height-1-1">
                  <div className="uk-margin-large-top uk-margin-large-bottom uk-margin-large-right">
                    <h3 className="uk-card-title">Sous-total</h3>
                    <div className="uk-margin-medium-bottom" uk-grid="true">
                      <div>
                        <span className="uk-text-normal">{cart.numberOfProducts} articles</span><br />
                        {subtotal.toFixed(2)}
                      </div>
                      <div>
                        <p>
                          <span className="uk-text-normal">Frais de livraison</span><br />
                          GRATUIT 
                        </p>
                      </div>
                    </div>
                    <hr />
                    {/* <div className="uk-margin-medium-bottom">
                      <ul uk-accordion="true">
                        <li>
                          <a className="uk-accordion-title" href="#"><i className="uk-text-lead las la-tag"></i><span className="uk-text-top">Code promo ?</span></a>
                          <div className="uk-accordion-content">
                            <form>
                              <div className="uk-margin" uk-margin="true">
                                <input className="uk-input uk-form-width-large uk-form-large" type="text" placeholder="Ex : FRENCH" onChange={(e) => setDiscount(e)}/>
                              </div>
                            </form>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <hr /> */}
                    <div>
                      <h3 className="uk-card-title">Total (taxes incl.)</h3>
                      <span className="uk-text-lead">{displayTotal().toFixed(2)}</span>
                    </div>
                    <div className="uk-text-left uk-margin-large-top">
                      <a href="/" className="uk-button uk-button-secondary">Procéder au paiement</a>
                    </div>
                  </div>
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