import { useContext, createContext } from 'react'

import { connectToDatabase } from '../util/mongodb'

import CustomHeadComponent from '../components/custom-head'
import NavbarComponent from '../components/navbar'
import ProductCardComponent from '../components/product-card'
import SliderComponent from '../components/slider'

import cartContext from '../contexts/context'

export default function Home({ allProducts }) {

  const {cart, actions} = useContext(cartContext)

  const featureSlider = [
    "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format",
    "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdGhpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format",
    "https://images.unsplash.com/photo-1570425387687-d2a34c7304a9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format"
  ]
  
  return (
    <div>
      <CustomHeadComponent />
      
        <main>
          <header>
            <NavbarComponent />
            <div id="header-slider-container">
              <SliderComponent slides = {featureSlider}/>
            </div>
          </header>
          
          <div className="uk-container">
            <div className="uk-child-width-1-4" uk-grid="true">
              {allProducts.map(product => {
                return <ProductCardComponent product={product} key={product._id}/>;
              })}
            </div>
          </div>
        </main>

      <style jsx>{`



      `}</style>

      <style jsx global>{`
        
      `}</style>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase()

  // const isConnected = await client.isConnected()

  const data = await db.collection('products').find().sort({id: 1}).limit(100).toArray()
  const allProducts = data.map(item => {
    const price = JSON.parse(item.price)
    return {
      _id: item._id,
      name: item.name,
      type: item.type,
      subtype: item.subtype,
      price: price,
      brand: item.brand,
      description: item.description,
      size: item.size,
      stocked: item.stocked,
      featured: item.Featured,
      //date: item.date,
      pics: item.pics,
      //featuredImage: item.pics[1],
    }
  })

  if(allProducts !== []){
    const allProductsContext = createContext(allProducts)
  }else{

  }

  return {
    props: { allProducts },
  }
}
