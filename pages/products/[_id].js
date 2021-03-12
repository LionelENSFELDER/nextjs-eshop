import CustomHead from '../../components/custom-head'
import Navbar from '../../components/navbar'
import { useRouter } from 'next/router'
import { connectToDatabase } from '../../util/mongodb'
import { useContext, useState } from 'react'
import cartContext from '../../contexts/context'

// const Product = ({ product }) => {
//     const router = useRouter()
//     const { productId } = router.query
//     return <div>
//         <p>Product id: {productId}</p>
//         <p>Product name: {product.name}</p>
//         <p>Product type: {product.type}</p>
//     </div>
// }
export default function Product({ product }) {

  const {cart, actions} = useContext(cartContext)
  const [quantity, setQuantity] = useState(1)

	return (
		<div className="uk-container">
      <CustomHead />
			<main>
        <Navbar />
				<div>
					{product &&
            <div>

              <div className="uk-height-match uk-grid-collapse uk-child-width-1-1 uk-child-width-1-2@m" uk-grid="true">
                
                <div className="uk-inline">
                  <span className="uk-label uk-position-top-left">Default</span>
                  <div className="uk-card uk-card-body uk-padding-remove uk-text-center">
                    <img src={product.pics[1]} width="100%" height="" alt="" uk-img="true" />
                  </div>
                </div>

                <div>
                    <div className="uk-card uk-card-body">
                    <div className="">
                      <ul className="uk-breadcrumb">
                        <li><a href="#">Accueil</a></li>
                        <li><a href="#">{product.type}</a></li>
                        <li><a href="#">{product.subtype}</a></li>
                      </ul>
                    </div>
                      <h1 className="uk-h2 uk-text-bold uk-margin-remove-top">{product.name} {product.type} {product.brand}</h1>
                      <span className="uk-h2 uk-text-bold uk-margin-medium-bottom uk-padding-remove-top">{product.price["$numberDecimal"]} €</span>
                      <p className="uk-margin-medium-bottom">
                        {product.description}<br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Mauris non ultrices mi. Praesent a ligula tempus...
                      </p>

                      <hr></hr>

                      <div className="uk-margin-medium-top" uk-grid="true">

                        <button className="uk-button uk-button-text uk-button-text-no-border" onClick={() => { quantity <= 1 ? setQuantity(1) : setQuantity(quantity - 1) } }>
                          <i className="las la-minus la-1x"></i>
                        </button>

                        <button className="uk-button uk-button-text uk-button-text-no-border">{quantity}</button>

                        <button className="uk-button uk-button-text uk-button-text-no-border" onClick={() =>{ quantity >= 5 ? setQuantity(5) : setQuantity(quantity + 1) } }>
                          <i className="las la-plus la-1x"></i>
                        </button>

                        <button className="uk-button uk-button-secondary uk-button-large uk-margin-medium-left uk-width-expand" onClick={() => actions({type: 'addToCard', payload: product, quantity: quantity})}>
                          <i className="las la-cart-arrow-down uk-margin-right uk-text-large"></i>
                          Ajouter au panier
                        </button>

                      </div>

                      <div className="uk-margin-top">

                        <button className="uk-button uk-button-text uk-text-muted uk-button-text-no-border uk-margin-right">
                          <i className="las la-heart uk-margin-small-right uk-text-large"></i>
                          Ajouter au favoris
                        </button>

                        <button className="uk-button uk-button-text uk-text-muted uk-button-text-no-border">
                          <i className="las la-share-alt uk-margin-small-right uk-text-large"></i>
                          Partager
                        </button>

                      </div>

                      <hr></hr>

                      <div className="uk-margin-top">

                        <p className=""><span className="uk-text-muted">En stock : </span>{ product.stocked ? 'Oui' : 'Bientôt disponible' }</p>
                        <p className=""><span className="uk-text-muted">Référence : </span>{ product._id }</p>
                        <p className=""><span className="uk-text-muted">Marque : </span>{product.brand}</p>

                      </div>

                    </div>
                </div>

              </div>

              <div className="uk-margin-xlarge-top">

                <div className="uk-flex uk-flex-center" uk-switcher="animation: uk-animation-fade; toggle: > *">

                  <button className="uk-button uk-button-text uk-margin-right" type="button">
                    <span className="uk-h3">Description</span>
                  </button>

                  <button className="uk-button uk-button-text" type="button">
                    <span className="uk-h3">Avis clients</span>
                  </button>

                </div>

                <ul className="uk-switcher uk-margin-medium-top">

                  <li>
                    <p className="uk-margin-medium-bottom">
                      {product.description}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Mauris non ultrices mi. Praesent a ligula tempus, rhoncus arcu non, suscipit leo. 
                      Sed cursus tortor sed nunc fringilla imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Mauris non ultrices mi.
                    </p>
                  </li>

                  <li>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Mauris non ultrices mi. Praesent a ligula tempus, rhoncus arcu non, suscipit leo. 
                      Sed cursus tortor sed nunc fringilla imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Mauris non ultrices mi.
                    </p>
                  </li>

                </ul>

              </div>

            </div>
					}
				</div>
			</main>
		</div>
	)
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: true
	}
}

export async function getStaticProps({ params }) {
	const { db } = await connectToDatabase()
	const data = await db.collection('products')
		.findOne(
      {_id: params._id},
      {
        projection: {
          _id: 1,
          name: 1,
          type: 1,
          subtype: 1,
          price: 1,
          brand: 1,
          description: 1,
          size: 1,
          stocked: 1,
          featured: 1,
          //date: 1,
          pics: 1,
        }
      }
    )
	const product = JSON.parse(JSON.stringify(data))

  if(!product){
    return{
      notFound: true,
    }
  }
  
	return {
		props: {
			product
		},
		//revalidate: 1,
	}
}