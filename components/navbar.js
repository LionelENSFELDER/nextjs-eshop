import Image from 'next/image'

export default function Navbar(){
	return (
		<div>
			<div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky uk-dark; cls-inactive: uk-navbar-transparent uk-light; top: 60">
				<nav className="uk-navbar-container uk-navbar-transparent">
					<div className="uk-container uk-container-expand">
						<div uk-navbar="true">
							<div className="uk-navbar-left">
								<ul className="uk-navbar-nav uk-align-left uk-visible@m">
									<a className="uk-navbar-item uk-logo" href="#">
											<img className="" src="/assets/img/logo.png" alt="" width="60px"/>
									</a>
									
								</ul>
							</div>
							<div className="uk-navbar-right">
								<ul className="uk-navbar-nav uk-visible@m">
									<li className="uk-active"><a href="#">Home</a></li>
									<li><a href="#">Shows</a></li>
									<li><a href="#">Movies</a></li>
									<li><a href="#">Most watching</a></li>
									<li><a href="#">Watchlist</a></li>
								</ul>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</div>
	)
}