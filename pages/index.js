import CustomHead from '../components/custom-head'
import Navbar from '../components/navbar'
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
            return <div key={product.id}>
              <a className="uk-link-toggle" href={'./products/' + product.id}>
                <div>
                  <div className="uk-card">
                    <div className="uk-card-media-top">
                        <img className="uk-width-1-1" src={product.featuredImage} alt=""/>
                    </div>
                    <div className="uk-card-body uk-padding-remove-horizontal">
                      <p className="uk-align-right">{product.name}</p>
                      <p className="uk-align-right">{product.brand}</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
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
    return {
      id: item._id,
      name: item.name,
      brand: item.brand,
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
