import React from 'react'


export const About = () =>{

	function Welcome(props){
		return <h1>Привет, {props.name}</h1>
	}

	const element2 = <Welcome name="Алиса"/>;

	function formatName(user){
		if(user){
			return user.firstName + ' ' + user.lastName;
		}
		return <h1>Здравствуй, незнакомец</h1>
	}

	const user = {
		firstName: 'love',
		lastName: 'alone',
	};

	const element = (
	    <div className="greeting">
	      <h1>Hello, world!</h1>
	      <h2>It is: {new Date().toLocaleTimeString()}.</h2>

	    </div>
	);
	
	return(
		<div class="jumbotron">
		  <div class="container">
		    <h1 class="display-3">React app</h1>
		    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
		    <p class="lead">123456</p>
		  </div>
		  <hr/>
		  <h1>
		  	Здравствуй, {formatName(user)}!
		  </h1>
		  <hr/>
		  {element}
		  <hr/>
		  {element2}

		</div>
	);
}