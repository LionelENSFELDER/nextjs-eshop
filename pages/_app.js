import '../styles/style.css'
import '../styles/uikit.css'
import '../util/uikit.js'
import '../util/uikit-icons.js'

import cartState from '../contexts/cart'
import cartContext from '../contexts/context'


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  
  const globalCartState = cartState();
  return (
    <cartContext.Provider value={globalCartState}>
      <Component {...pageProps} />
    </cartContext.Provider>
  )
}