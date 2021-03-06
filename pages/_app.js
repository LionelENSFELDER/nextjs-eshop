import '../styles/style.css'
import '../styles/uikit.css'
import '../util/uikit.js'
import '../util/uikit-icons.js'

import cartState from '../contexts/cart'
import Context from '../contexts/context'


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const cart = cartState();
  return (
    <Context.Provider value={cart}>
      <Component {...pageProps} />
    </Context.Provider>
  )
}