import Link from 'next/link'

export default function ProductCard({ product }){
  console.log(product);
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
                <a className="" href="">
                  <i className="las la-plus-square la-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}