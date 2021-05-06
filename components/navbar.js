import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="" uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky uk-background-default; cls-inactive: uk-position-fixed uk-navbar-transparent; top: 10">
      <nav className="uk-navbar-container uk-width-1-1">
        <div className="uk-container uk-container-xlarge">
          <div uk-navbar="true">
            <div className="uk-navbar-left uk-text-bolder">
              <ul className="uk-navbar-nav uk-align-left">
                <Link href="/">
                  <a className="uk-navbar-item uk-logo">
                    <img className="" src="/assets/img/logo.png" alt="" width="60px" />
                  </a>
                </Link>
              </ul>
            </div>
            <div className="uk-navbar-right uk-text-bold">
              {/* mobile menu */}
              <div className="uk-navbar-nav uk-align-left uk-hidden@m">
                <button href="#offcanvas-slide" uk-toggle="target: #offcanvas-slide">
                  <i className="las la-bars la-3x"></i>
                </button>
                <div id="offcanvas-slide" uk-offcanvas="true">
                  <div className="uk-offcanvas-bar uk-background-default">
                    <button className="uk-offcanvas-close" type="button" uk-close="true">
                      <i className="las la-times la-2x"></i>
                    </button>
                    <ul className="uk-list">
                      <li>
                        <Link href="/"><a>HOME</a></Link>
                      </li>
                      <li>
                        <Link href="#"><a href="#">A PROPOS</a></Link>
                      </li>
                      <li>
                        <Link href="#"><a href="#" type="button">CATEGORIES</a></Link>
                        <div uk-dropdown="mode: click">
                          <ul className="uk-list">
                            <li>
                              <Link href="#"><a href="#">sdfdfdf</a></Link>
                            </li>
                            <li>
                              <Link href="#"><a href="#">ssdsds dfdfdf</a></Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link href="#"><a href="#">CONTACT</a></Link>
                      </li>
                      <li>
                        <Link href="/login"><a><i className="las la-user la-2x"></i>LOGIN</a></Link>
                      </li>
                      <li>
                        <Link href="/cart"><a><i className="las la-shopping-cart la-2x"></i>PANIER</a></Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* desktop menu */}
              <ul className="uk-navbar-nav uk-visible@m">
                <li>
                  <Link href="/"><a>HOME</a></Link>
                </li>
                <li>
                  <Link href="#"><a>A PROPOS</a></Link>
                </li>
                <li>
                  <Link href="#"><a href="#" type="button">CATEGORIES</a></Link>
                  <div uk-dropdown="mode: click">
                    <ul className="uk-list">
                      <Link href="#"><a>Cat 1</a></Link>
                      <Link href="#"><a>Cat 2</a></Link>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link href="#"><a>CONTACT</a></Link>
                </li>
                <li>
                  <Link href="/login"><a>LOGIN</a></Link>
                </li>
                <li>
                  <Link href="/cart"><a><i className="las la-shopping-cart la-2x"></i>PANIER</a></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}