import CustomHead from '../components/custom-head'
import Navbar from '../components/navbar'
import ProductCard from '../components/product-card'
import { useContext, createContext } from 'react'
import { connectToDatabase } from '../util/mongodb'

export default function Home({ allProducts }) {
  return (
    <div className="uk-container">

      <CustomHead />

      <main>
        <Navbar />

        <div className="uk-child-width-1-4" uk-grid="true">

          {allProducts.map(product => {
            return <ProductCard product={product} key={product.id}/>
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
