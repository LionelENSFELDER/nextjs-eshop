import Head from 'next/head'
import { useRouter } from 'next/router'
import { connectToDatabase } from '../../util/mongodb'
//import { useContext, createContext } from 'react'

// const Product = ({ product }) => {
//     const router = useRouter()
//     const { productId } = router.query
//     return <div>
//         <p>Product id: {productId}</p>
//         <p>Product name: {product.name}</p>
//         <p>Product type: {product.type}</p>
//     </div>
// }
export default function Product({ product }){
    return(
        <div>
            <Head>
                <title>Lezarlando</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.6.16/dist/css/uikit.min.css" />
                <script src="https://cdn.jsdelivr.net/npm/uikit@3.6.16/dist/js/uikit.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/uikit@3.6.16/dist/js/uikit-icons.min.js"></script>
            </Head>
            <main>
                <div>
                    {product &&
                        <div>
                            <img src={product.pics[1]} alt=""/>
                            Nom: {product.name}, type: {product.type}
                        </div>
                    }
                </div>
            </main>
        </div>
    )
}

export async function getStaticPaths(){
    return{
        paths: [],
        fallback: true
    }
}

export async function getStaticProps({ params }){
    const { db } = await connectToDatabase()
    const data = await db.collection('products')
    .findOne({
            _id: params.id
        },{
            projection: {
                _id: 1,
                name: 1,
                type: 1,
                pics: 1
            }
        })
        const product = JSON.parse(JSON.stringify(data))
        console.log('product', product)
    return{
        props: {
            product
        },
        revalidate: 1,
        // notFound: true
    }
}