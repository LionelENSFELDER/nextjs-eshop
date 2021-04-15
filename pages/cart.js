import { useContext, useState } from 'react';
import cartContext from '../contexts/context';
import CustomHeadComponent from '../components/custom-head';
import NavbarComponent from '../components/navbar';
import CartProductCard from '../components/cart-product-card';
import FooterComponent from '../components/footer';

export default function CartPage(){

  const {cart, actions} = useContext(cartContext);

  const totalProductsPrice = () => {
    var total = 0;
    cart.map(product =>{
      let unitPrice = product.price;
      let quantity = product.quantity;
      let totalForThisProduct = unitPrice * quantity;
      total = total + totalForThisProduct;
    });
    return parseFloat(total.toFixed(2));
  }

  return(
    <div>
      <CustomHeadComponent />
      <main>
        <header>
          <NavbarComponent />
        </header>
        <div className="uk-height-medium"></div>
        <section className="uk-container uk-container-xlarge">
          {Array.isArray(cart)&&
            <div className="uk-container">
              <div className="uk-grid-large" uk-grid="true">
                <div className="uk-width-1-1 uk-width-3-5@m">
                  <div className="uk-card">
                    <h2 className="uk-text-bold">Panier</h2>
                    {cart.map(product =>{
                      return(
                        <CartProductCard product={product} key={product._id}/>
                      )
                    })}
                    <div className="uk-text-left">
                      <a href="/" className="uk-button uk-button-secondary">Continuer mes achats</a>
                    </div>
                  </div>
                </div>
                {/* TODO : add leader */}
                <div className="uk-width-1-1 uk-width-2-5@m uk-background-muted uk-height-1-1">
                  <div className="uk-margin-large-top uk-margin-large-bottom uk-margin-large-right">
                    <h3 className="uk-card-title">Sous-total</h3>
                    <div className="uk-margin-medium-bottom" uk-grid="true">
                      <div>
                        <span className="uk-text-normal">X articles</span><br/>
                        {totalProductsPrice()}
                      </div>
                      <div>
                        <p>
                          <span className="uk-text-normal">Frais de livraison</span><br/>
                          GRATUIT
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="uk-margin-medium-bottom">
                      <ul uk-accordion="true">
                        <li>
                          <a className="uk-accordion-title" href="#"><i className="uk-text-lead las la-tag"></i><span class="uk-text-top">Code promo ?</span></a>
                          <div class="uk-accordion-content">
                            <form>
                              <div class="uk-margin" uk-margin="true">
                                  <input class="uk-input uk-form-width-large uk-form-large" type="text" placeholder="Ex : FRENCHDAYS" />
                              </div>
                            </form>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <hr />
                    <div>
                      <h3 className="uk-card-title">Total (taxes incl.)</h3>
                      <span className="uk-text-lead"></span>
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