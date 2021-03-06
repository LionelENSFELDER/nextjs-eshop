import Link from 'next/link'
import { useContext, useState} from 'react'
import Context from '../contexts/context'

export default function ProductCard({ product }){

  const {cart, actions} = useContext(Context)

  return(
    <div>
      <Link href={'/products/' + product.id}>
        <a className="uk-link-toggle">
          <div>
            <div className="uk-card">
              <div className="uk-card-media-top">
                  <img className="uk-width-1-1" src={product.featuredImage} alt=""/>
              </div>
              <div className="uk-card-body uk-padding-small uk-padding-remove-horizontal">
                <div className="uk-display-block">{product.name}</div>
                <div className="uk-display-block">{product.brand}</div>
                <div className="uk-display-block">{product.price} €</div>
                <div>
                  <i className="las la-star"></i>
                  <i className="las la-star"></i>
                  <i className="las la-star"></i>
                  <i className="las la-star"></i>
                  <i className="las la-star-half"></i>
                </div>
                <a className="link-add-to-wishlist" href="">
                  <i className="las la-plus-circle la-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </a>
      </Link>
      <div>
        <button type="button" className="btn btn-warning" onClick={() => actions( {type: "addToCard", payload: product} ) }>Add to cart</button>
      </div>
</div>
  )
}