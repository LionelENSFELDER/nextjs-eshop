export default function Navbar(){
	return (
		<div>
			<div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent; top: 60">
				<nav className="uk-navbar-container uk-navbar-transparent">
					<div className="uk-container uk-container-expand">
						<div uk-navbar="true">
							<div className="uk-navbar-left uk-text-bolder">
								<ul className="uk-navbar-nav uk-align-left uk-visible@m">
									<a className="uk-navbar-item uk-logo" href="/">
											<img className="" src="/assets/img/logo.png" alt="" width="60px"/>
									</a>
									
								</ul>
							</div>
							<div className="uk-navbar-right uk-text-bold">
								<ul className="uk-navbar-nav uk-visible@m">
									<li><a href="/">Home</a></li>
									<li><a href="#">à propos</a></li>
									<li>
                    <a href="#" type="button">Catégories</a>
                    <div uk-dropdown="mode: click">
                        <ul className="uk-list">
                          <li><a href="#">sdfdfdf</a></li>
                          <li><a href="#">ssdsds dfdfdf</a></li>
                        </ul>
                    </div>
                  </li>
									<li><a href="#">Contact</a></li>
									<li><a href="#"><i class="fas fa-user fa-lg uk-margin-small-right"></i>Login</a></li>
                  <li><a href="#"><i class="fas fa-shopping-cart fa-lg uk-margin-small-right"></i>Cart</a></li>
                </ul>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</div>
	)
}