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
		</div>
	);
};

export default Home;
