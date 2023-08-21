import React from 'react';
import heroImg from '../assets/hero.svg';

const Hero = () => {
	return (
		<section className="hero">
			<div className="hero-center">
				<div className="hero-title">
					<h1>Contentful CMS</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Ipsam, repellendus? Voluptatem ipsam illo, atque tenetur
						explicabo cum exercitationem dolor. Ipsa perferendis totam
						nemo iure repellat optio illo, beatae odit excepturi!
					</p>
				</div>
				<div className="img-container">
					<img src={heroImg} alt="woman and the browser" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
