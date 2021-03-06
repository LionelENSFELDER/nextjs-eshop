import CustomHead from '../components/custom-head'
import Navbar from '../components/navbar'
import ProductCard from '../components/product-card'
import Slider from '../components/slider'
import { useContext, createContext, useState} from 'react'
import { connectToDatabase } from '../util/mongodb'
import {CartContext} from '../contexts/cart'
export default function Home({ allProducts }) {
  ////////////////////////////
  const featureSlider = [
    "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format",
    "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdGhpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format",
    "https://images.unsplash.com/photo-1570425387687-d2a34c7304a9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format"
  ]
  
  ////////////////////////////
  // const [cart, setCart] = useState([]);

  // function addToCart(product){
  //   setCart([...cart, product]);
  //   console.log('this cart is now =>', cart);
  // };
  ////////////////////////////
  return (
    <div className="uk-container">

      <CustomHead />
      
        <main>
            <div>
              <Navbar />
              <Slider slides = {featureSlider}/>
            </div>

            <div className="uk-child-width-1-4" uk-grid="true">
              {allProducts.map(product => {
                return <ProductCard product={product} key={product.id} addToCart={() => addToCart(product)}/>;
              })}
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
      id: item._id,
      name: item.name,
      brand: item.brand,
      price: price,
      featuredImage: item.pics[1],
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
