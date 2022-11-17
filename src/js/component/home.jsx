import React from "react";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	const items = [
		{ href: "#", text: "Home", active: true },
		{ href: "#", text: "Features", active: false },
		{ href: "#", text: "Pricing", active: false },
		{ href: "#", text: "Contact", active: false }
	]
	const card = 
		{ 
		img: { src: "https://picsum.photos/200/300", alt: "Image" }, 
		btn: { href: "#", text: "Click here" }, 
		title: "Card title", 
		text: "Some quick example text to build on the card title and make up the bulk of the card's content." 
	}

	return (
		<div className="text-center">
			<Navbar items={items} />
			<Card button={card.btn} img={card.img} text={card.text} title={card.text} />
			<Card button={card.btn} img={{ src: "https://picsum.photos/200/300", alt: "Imagen" }} text="Título de la tarjeta" title={card.title} />
		</div>
	);
};

export default Home;
