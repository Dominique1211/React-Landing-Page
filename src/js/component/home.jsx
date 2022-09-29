import React from "react";
import { Navbar } from "./navbar.jsx";

import { Card } from "./card.jsx";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Card/>
		</div>
	);
};

export default Home;
