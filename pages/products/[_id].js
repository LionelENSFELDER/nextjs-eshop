import CustomHead from '../../components/custom-head'
import Navbar from '../../components/navbar'
import { useRouter } from 'next/router'
import { connectToDatabase } from '../../util/mongodb'
import { useContext } from 'react'
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

	return (
		<div className="uk-container">
      <CustomHead />
			<main>
        <Navbar />
				<div>
					{product &&
            <div className="uk-card uk-card-default uk-card-large uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid="true">
              <div className="uk-card-media-left uk-cover-container">
                <img src={product.pics[1]} alt="" uk-cover="true" />
                <canvas width="600" height="400"></canvas>
              </div>
              <div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title">{product.name}</h3>
                    <p>{product.brand}</p>
                    <p>{product.type}</p>
                    <p>{product.price["$numberDecimal"]}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <div>
                      <button className="" href="" onClick={() => actions( {type: "addOne", payload: product} ) }>
                        <i className="las la-plus-circle la-2x"></i>
                      </button>
                      <button className="" href="" onClick={() => actions( {type: "deleteOne", payload: product} )} >
                        <i className="las la-minus-circle la-2x"></i>
                      </button>
                      <button className="" href="" onClick={() => actions( {type: "deleteFromCard", payload: product} )} >
                        <i className="las la-minus-circle la-2x">del</i>
                      </button>
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
          brand: 1,
          type: 1,
          price: 1,
          pics: 1
        }
      }
    )
	const product = JSON.parse(JSON.stringify(data))
  
	return {
		props: {
			product
		},
		revalidate: 1,
		// notFound: true
	}
}