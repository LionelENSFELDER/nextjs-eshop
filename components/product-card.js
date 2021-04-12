import Link from 'next/link'
import { useContext} from 'react'
import cartContext from '../contexts/context'

export default function ProductCard({ product }){

  const {cart, actions} = useContext(cartContext)

  return(
    <div id="product-card-container" className="uk-inline">
      <Link href={'/products/' + product._id}>
        <a className="uk-link-toggle">
          <div>
            <div className="uk-card">
              <div className="uk-card-media-top">
                  <img className="uk-width-1-1" src={product.pics[1]} alt="" />
              </div>
              <div className="uk-card-body uk-padding-small uk-padding-remove-horizontal">
                <div className="uk-display-block">{product.name}</div>
                {/* <div className="uk-display-block">{product.brand}</div> */}
                <div className="uk-display-block">{product.price} €</div>
                <div>
                  <i className="las la-star icon-star"></i>
                  <i className="las la-star icon-star"></i>
                  <i className="las la-star icon-star"></i>
                  <i className="las la-star icon-star"></i>
                  <i className="las la-star-half icon-star"></i>
                </div>
                <a className="link-add-to-wishlist" href="">
                  <i className="las la-plus-circle la-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </a>
      </Link>
      <div id="product-card-actions" className="uk-position-cover">
        <button type="button" className="btn btn-warning" onClick={() => actions( {type: "addToCard", payload: product, quantity:1} ) }>Add to cart</button>
        <button type="button" className="btn btn-warning" onClick={() => actions( {type: "deleteFromCard", payload: product} ) }>Delete from cart</button>
      </div>
    </div>
  )
}