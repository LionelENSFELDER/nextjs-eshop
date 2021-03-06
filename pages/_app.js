import '../styles/style.css'
import '../styles/uikit.css'
import '../util/uikit.js'
import '../util/uikit-icons.js'
import {CartProvider} from '../contexts/cart'
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}