import { useContext, createContext } from 'react'

import { connectToDatabase } from '../util/mongodb'

import CustomHeadComponent from '../components/custom-head'
import NavbarComponent from '../components/navbar'
import ProductCardComponent from '../components/product-card'
import SliderComponent from '../components/slider'

import cartContext from '../contexts/context'

export default function Home({ allProducts }) {

  const {cart, actions} = useContext(cartContext)

  // TODO download and compress sliders images
  const featureSlider = [
    "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNuZWFrZXJzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format",
    "https://images.unsplash.com/photo-1529720317453-c8da503f2051?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format",
    "https://images.unsplash.com/photo-1499237302743-ba2c2740f824?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format",
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format",
    "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format"
  ]
  
  return (
    <div>
      <CustomHeadComponent />
      
        <main>

          <header>
              <NavbarComponent />
          </header>
          <div uk-height-viewport="expand: true">
            <SliderComponent slides = {featureSlider}/>
          </div>
          
          <section className="uk-container uk-container-xlarge uk-margin-xlarge-bottom">

            <h2 className="uk-text-bold">Best sellers</h2>
            <div className="uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-4@m" uk-grid="true">
              {allProducts.map(product => {
                return <ProductCardComponent product={product} key={product._id}/>;
              })}
            </div>

          </section>
          
          <section className="uk-container uk-container-xlarge uk-margin-xlarge-bottom">

            <div className="uk-grid-large uk-child-width-expand@s uk-child-width-1-3@m" uk-grid="true">

              <div>
                <div className="uk-height-medium uk-cover-container uk-light">
                  <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D" alt="" uk-cover />
                  <div className="uk-position-cover uk-flex uk-flex-center uk-flex-middle">
                    <h3 className="">Collection Femme</h3>
                  </div>
                </div>
              </div>

              <div>
                <div className="uk-height-medium uk-cover-container uk-light">
                  <img src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D" alt="" uk-cover />
                  <div className="uk-position-cover uk-flex uk-flex-center uk-flex-middle">
                    <h3 className="">MEGA PROMOS !</h3>
                  </div>
                </div>
              </div>

              <div>
                <div className="uk-height-medium uk-cover-container uk-light">
                  <img src="https://images.unsplash.com/photo-1571210862729-78a52d3779a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D" alt="" uk-cover />
                  <div className="uk-position-cover uk-flex uk-flex-center uk-flex-middle">
                    <h3 className="">Collection Enfant</h3>
                  </div>
                </div>
              </div>
              
            </div>

          </section>

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

  const data = await db.collection('products').find().sort({id: 1}).limit(4).toArray()
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
