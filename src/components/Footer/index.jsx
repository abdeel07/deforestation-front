// src/components/Footer.js
import React from "react";
import "./style.css";
import github from "../../assets/images/social/github.svg";
import instagram from "../../assets/images/social/instagram.svg";
import linkedin from "../../assets/images/social/linkedin.svg";
import twitter from "../../assets/images/social/twitter.svg";
import youtube from "../../assets/images/social/youtube.svg";
import logoImage from "../../assets/images/logo/logo.png";

const Footer = () => {
	return (
		<>
			{/* <section className="subscription-section">
				<div className="subscription-wrapper">
					<div className="subscription__description">
						<h2>Join 10k+ other readers!</h2>
						<p>Stay up to date with our news and articles</p>
					</div>
					<form className="subscribe-form">
						<input
							type="email"
							spellcheck="false"
							placeholder="Your Email"
						/>
						<button type="submit">Subscribe</button>
					</form>
				</div>
			</section> */}
			<footer>
				<div className="footer-wrapper">
					<div className="social-wrapper">
						<div className="social-links">
							<ul>
								<li>
									<a href="/" title="Instagram">
										<img src={instagram} alt="Instagram" />
									</a>
								</li>
								<li>
									<a href="/" title="Linkedin">
										<img src={linkedin} alt="Linkedin" />
									</a>
								</li>
								<li>
									<a href="/" title="Twitter">
										<img src={twitter} alt="Twitter" />
									</a>
								</li>
								<li>
									<a href="/" title="Youtube">
										<img src={youtube} alt="YouTube" />
									</a>
								</li>
								<li>
									<a href="/" title="GitHub">
										<img src={github} alt="GitHub" />
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="footer-columns">
						<div className="footer-links">
							<div className="footer-logo !max-w-none">
								<img
									src={logoImage}
									alt="Logo"
									className="h-28 w-64"
								/>
							</div>

							<section>
								<h3>Resources</h3>
								<ul>
									<li>
										<a href="/" title="Support">
											Support
										</a>
									</li>
									<li>
										<a href="/" title="Sitemap">
											Sitemap
										</a>
									</li>
									<li>
										<a href="/" title="Newsletter">
											Newsletter
										</a>
									</li>
									<li>
										<a href="/" title="Help Centre">
											Help Centre
										</a>
									</li>
									<li>
										<a href="/" title="Investor">
											Investor
										</a>
									</li>
								</ul>
							</section>
							<section>
								<h3>Company</h3>
								<ul>
									<li>
										<a href="/" title="About Us">
											About Us
										</a>
									</li>
									<li>
										<a href="/" title="Blog">
											Blog
										</a>
									</li>
									<li>
										<a href="/" title="Careers">
											Careers
										</a>
									</li>
									<li>
										<a href="/" title="Press">
											Press
										</a>
									</li>
									<li>
										<a href="/" title="Contact">
											Contact
										</a>
									</li>
								</ul>
							</section>
							<section>
								<h3>Legal</h3>
								<ul>
									<li>
										<a href="/" title="Terms and services">
											Terms
										</a>
									</li>
									<li>
										<a href="/" title="Privacy Policy">
											Privacy
										</a>
									</li>
									<li>
										<a href="/" title="Cookies">
											Cookies
										</a>
									</li>
									<li>
										<a href="/" title="Licenses">
											Licenses
										</a>
									</li>
									<li>
										<a href="/" title="Cookies">
											Contact
										</a>
									</li>
								</ul>
							</section>
						</div>
					</div>
					<div className="footer-bottom">
						<div className="footer-description">
							<h3>Elevate your tech skills</h3>
							<p>Develop and design platforms with ease</p>
						</div>
						<small>
							©<span id="year">{new Date().getFullYear()}</span>,
							All rights reserved
						</small>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
