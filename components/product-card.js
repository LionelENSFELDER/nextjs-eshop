import Link from 'next/link'
import { useContext} from 'react'
import cartContext from '../contexts/context'

export default function ProductCard({ product }){

  const {cart, actions} = useContext(cartContext)

  return(
    <div className="uk-inline">
      <Link href={'/products/' + product._id}>
        <a className="uk-link-toggle">
          <div>
            <div className="uk-card">
              <div className="uk-card-media-top">
                  <img className="uk-width-1-1" src={product.pics[1]} alt="" />
              </div>
              <div className="uk-card-body uk-padding-small uk-padding-remove-horizontal uk-text-right">
                <h3 className="uk-text-bold uk-margin-small-bottom">{product.name}</h3>
                {/* <div className="uk-display-block">{product.brand}</div> */}
                <h5 className="uk-text-bold uk-margin-small-bottom uk-margin-remove-top">{product.price} €</h5>
                <div>
                  <i className="las la-star icon-star"></i>
                  <i className="las la-star icon-star"></i>
                  <i className="las la-star icon-star"></i>
                  <i className="las la-star icon-star"></i>
                  <i className="las la-star-half icon-star"></i>
                </div>
                {/* <a className="link-add-to-wishlist" href="">
                  <i className="las la-plus-circle la-2x"></i>
                </a> */}
              </div>
            </div>
          </div>
        </a>
      </Link>
      <div id="product-card-actions" className="uk-text-right">
        <button class="uk-button uk-button-secondary" onClick={() => actions( {type: "addToCard", payload: product, quantity:1} ) }>Ajouter au panier</button>
        {/* <button class="uk-button uk-button-secondary" onClick={() => actions( {type: "deleteFromCard", payload: product} ) }>Supprimer du panier</button> */}
      </div>
    </div>
  )
}