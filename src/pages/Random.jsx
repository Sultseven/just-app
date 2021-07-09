import React, {Fragment} from 'react'
import {Button} from '../components/Button'

export const Random = (props) =>{

    const ClickName = () =>{
    	console.log("Hello, react")
    };

	return(
		<Fragment>
			<h1>Just do it</h1>
			<hr/>
			<Button onClick={ClickName} text={123}/>
			<div>
				<a onClick={ClickName} href="#">Click me</a>
			</div>
		</Fragment>
	)
}