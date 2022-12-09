import React, { useState } from "react";

//create your first component
const Home = () => {
const [color,setcolor]= useState ("");

	return (
		<div className="traffic-light">
			<div className ={color === "red" ? "glow light red" : "light red"} onClick></div>
			<div className ={color === "yellow" ? "glow light yellow" : "light yellow"}onclick></div>
			<div className = {color === "green" ? "glow light green" : "light green"}onclick></div>
		</div>
	);
};

export default Home;
