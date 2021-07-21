import React, {Fragment} from 'react'


export const Button = (props) =>{
	return(
		<Fragment>
			<button type="button" className="btn btn-outline-danger mr-5">{props.text}</button>	
			{/*<a href="#">{props.text}</a>
*/}		</Fragment>
		
	)
}