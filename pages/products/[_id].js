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
            <div className="uk-height-large uk-height-match uk-grid-collapse uk-child-width-1-1 uk-child-width-1-2@m" uk-grid="true">
              <div>
                  <div className="uk-card uk-card-body uk-text-center">
                    <img src={product.pics[1]} width="100%" height="" alt="" uk-img="true" />
                  </div>
              </div>
              <div>
                  <div className="uk-card uk-card-body">
                    <h1 className="uk-text-bold">{product.name} {product.type} {product.brand}</h1>
                    <h2 className="uk-text-bold uk-margin-medium-bottom">{product.price["$numberDecimal"]} €</h2>
                    <p className="uk-margin-medium-bottom">
                      {product.description}<br/>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Mauris non ultrices mi. Praesent a ligula tempus, rhoncus arcu non, suscipit leo. 
                      Sed cursus tortor sed nunc fringilla imperdiet.
                    </p>

                    <hr></hr>

                    <div className="uk-margin-medium-top" uk-grid="true">
                      <button className="uk-button uk-button-text" onClick={() =>{ quantity >= 5 ? setQuantity(5) : setQuantity(quantity + 1) } }>
                        <i className="las la-plus la-2x"></i>
                      </button>
                      <div className="uk-text-bold uk-text-center uk-text-lead">{quantity}</div>
                      <button className="uk-button uk-button-text uk-margin-right" onClick={() => { quantity <= 1 ? setQuantity(1) : setQuantity(quantity - 1) } }>
                        <i className="las la-minus la-2x"></i>
                      </button>
                      <button className="uk-button uk-button-secondary uk-button-large" onClick={() => actions({type: 'addToCard', payload: product, quantity: quantity})}>
                        <i className="las la-cart-arrow-down uk-margin-right uk-text-large"></i>
                        Ajouter au panier
                      </button>
                    </div>
                    <div className="uk-margin-top">
                      <button className="uk-button uk-button-text uk-text-muted uk-margin-right">
                        <i className="las la-bookmark uk-margin-right uk-text-large"></i>
                        Ajouter au favoris
                      </button>
                      <button className="uk-button uk-button-text uk-text-muted">
                        <i className="las la-bullhorn uk-margin-right uk-text-large"></i>
                        Partager
                      </button>
                    </div>

                    <hr></hr>

                    <div className="uk-margin-top">
                      <p className="">En stock : { product.stocked ? 'Oui' : 'Bientôt disponible' }</p>
                      <p className="">Référence : { product._id }</p>
                      <p className="">Marque : {product.brand}</p>
                    </div>

                  </div>
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