import React from "react";

import Body   from "./Body";
import Footer from "./footer";
import Header from "./Header";


export default class Layout extends React.Component { 

	render(){
		const title = "Ad Analytics";
		return( 
	
			<div>
			  
				<Header title={title}/>
				<Body />
				<Footer />
			</div>

		);
	}
}