import React from "react";
import { Navbar } from "./navbar.jsx";

import { Card } from "./card.jsx";

// import { Cardtwo } from "./card.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Card/>
			{/* <Cardtwo/> */}
			<footer className="bg-light text-center text-lg-start">
				<div className="text-center p-3">
					© 2020 Copyright:
					<a className="text-dark" href="https://mdbootstrap.com/">
						MDBootstrap.com
					</a>
				</div>
			</footer>
		</div>
	);
};

export default Home;
