import Link from 'next/link';

import CustomHeadComponent from '../components/custom-head';
import NavbarComponent from '../components/navbar';
import FooterComponent from '../components/footer';

export default function login() {
	return (
		<div>
			<CustomHeadComponent />
			<main>
				<header>
					<NavbarComponent />
				</header>

				<div className="uk-height-medium">

				</div>

				<section className="uk-container uk-container-xlarge uk-margin-xlarge-bottom">
					<div className="uk-margin-auto uk-margin-auto-vertical uk-width-1-2@s uk-card uk-card-default uk-card-body uk-text-center">
						<h2 className="uk-text-bold">Connectez vous</h2>
						<form className="">
							<div className="uk-margin">
								<div className="uk-inline">
									<span className="uk-form-icon">
										<i className="las la-user"></i>
									</span>
									<input className="uk-input uk-form-large" type="text" placeholder="Email" />
								</div>
							</div>
							<div className="uk-margin">
								<div className="uk-inline">
									<span className="uk-form-icon">
										<i className="las la-key"></i>
									</span>
									<input className="uk-input uk-form-large" type="text" placeholder="Mot de passe" />
								</div>
							</div>
							<div className="uk-margin">
								<Link href="#"><a className="footer-list-links uk-margin-small-bottom">Mot de passe oublié</a></Link>
							</div>
							<div className="uk-margin">
								<div className="uk-inline">
									<a href="/" className="uk-button uk-button-secondary uk-width-1-1" type="submit">Se connecter</a>
								</div>
							</div>
						</form>
					</div>
				</section>

				<hr />

				<section className="uk-container uk-container-xlarge">
					<FooterComponent />
				</section>

			</main>
		</div>
	)
}