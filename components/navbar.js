export default function Navbar(){
	return (
		<div>
			<div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent; top: 60">
				<nav className="uk-navbar-container uk-navbar-transparent">
					<div className="uk-container uk-container-expand">
						<div uk-navbar="true">
              
							<div className="uk-navbar-left uk-text-bolder">

								<ul className="uk-navbar-nav uk-align-left">
									<a className="uk-navbar-item uk-logo" href="/">
											<img className="" src="/assets/img/logo.png" alt="" width="60px"/>
									</a>
								</ul>

							</div>

							<div className="uk-navbar-right uk-text-bold">

                <ul className="uk-navbar-nav uk-align-left uk-hidden@m">
                  <li>
                    <a className="uk-navbar-item uk-logo" uk-toggle="target: #offcanvas-slide">
                      <i className="fas fa-bars fa-2x"></i>
                    </a>
                    <div id="offcanvas-slide" uk-offcanvas="overlay: true">
                      <div className="uk-offcanvas-bar uk-background-default">

                        <a className="uk-align-right" uk-close>
                          <i className="fas fa-times"></i>
                        </a>

                        <ul className="uk-list">
                          <li><a href="/">HOME</a></li>
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
                          <li><a href="#"><i className="fas fa-user fa-lg uk-margin-small-right"></i>LOGIN</a></li>
                          <li><a href="#"><i className="fas fa-shopping-cart fa-lg uk-margin-small-right"></i>PANIER</a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
								</ul>

								<ul className="uk-navbar-nav uk-visible@m">
									<li><a href="/">HOME</a></li>
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
									<li><a href="#"><i className="fas fa-user fa-lg uk-margin-small-right"></i>LOGIN</a></li>
                  <li><a href="#"><i className="fas fa-shopping-cart fa-lg uk-margin-small-right"></i>PANIER</a></li>
                </ul>

							</div>

						</div>
					</div>
				</nav>
			</div>
		</div>
	)
}