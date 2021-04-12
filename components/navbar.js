import Link from 'next/link'


export default function Navbar(){
	return (
			<div className="" uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky uk-background-default; cls-inactive: uk-position-fixed uk-navbar-transparent; top: 10">
				<nav className="uk-navbar-container uk-width-1-1">
					<div className="uk-container">
						<div uk-navbar="true">
              
							<div className="uk-navbar-left uk-text-bolder">

								<ul className="uk-navbar-nav uk-align-left">
									<Link href="/">
                    <a className="uk-navbar-item uk-logo">
                        <img className="" src="/assets/img/logo.png" alt="" width="60px"/>
                    </a>
                  </Link>
								</ul>

							</div>

							<div className="uk-navbar-right uk-text-bold">

                {/* mobile menu */}
                <ul className="uk-navbar-nav uk-align-left uk-hidden@m">
                  <li>
                    <a className="uk-navbar-item uk-logo" uk-toggle="target: #offcanvas-slide">
                      <i className="las la-bars la-3x"></i>
                    </a>
                    <div id="offcanvas-slide" uk-offcanvas="overlay: true">
                      <div className="uk-offcanvas-bar uk-background-default">

                        <a className="uk-align-right" uk-close="true">
                          <i className="las la-times la-2x"></i>
                        </a>

                        <ul className="uk-list">
                          <li><Link href="/"><a>HOME</a></Link></li>
                          <li><a href="#">A PROPOS</a></li>
                          <li>
                            <a href="#" type="button">CATEGORIES</a>
                            <div uk-dropdown="mode: click">
                                <ul className="uk-list">
                                  <li><a href="#">sdfdfdf</a></li>
                                  <li><a href="#">ssdsds dfdfdf</a></li>
                                </ul>
                            </div>
                          </li>
                          <li><a href="#">CONTACT</a></li>
                          <li><a href="#"><i className="las la-user la-2x"></i>LOGIN</a></li>
                          <li><a href="#"><i className="las la-shopping-cart la-2x"></i>PANIER</a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
								</ul>

                {/* desktop menu */}
								<ul className="uk-navbar-nav uk-visible@m">
									<li>
                    <Link href="/"><a>HOME</a></Link>
                  </li>
									<li>
                    <Link href="#"><a>A PROPOS</a></Link>
                  </li>
									<li>
                    <a href="#" type="button">CATEGORIES</a>
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
                    <Link href="#"><a>LOGIN</a></Link>
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