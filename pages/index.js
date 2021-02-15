import CustomHead from '../components/custom-head'
import Navbar from '../components/navbar'
import { useContext, createContext } from 'react'
import { connectToDatabase } from '../util/mongodb'

export default function Home({ allProducts }) {
  return (
    <div className="uk-container">
      {/* <Head>
        <title>Lezarlando</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.6.16/dist/css/uikit.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.6.16/dist/js/uikit.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.6.16/dist/js/uikit-icons.min.js"></script>
      </Head> */}

      <CustomHead />

      <main>
        <Navbar />

        <div className="uk-child-width-1-3" uk-grid="true">
          {allProducts.map(product => {
            return <div key={product.id}>
              <a className="uk-link-toggle" href={'./products/' + product.id}>
                <div>
                  <div className="uk-card">
                    <div className="uk-card-media-top">
                        <img src={product.featuredImage} alt=""/>
                    </div>
                    <div className="uk-card-body">
                      <h3>{product.name}</h3>
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
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
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
