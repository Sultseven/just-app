import React from 'react'
import {Button} from './Button.jsx'

export const Notes = ({notes}) =>{


	function Click1(){
		return console.log("Hello");
	}

	const numbers = [
		{id:1, name: 'Продукты'},
		{id:2, name: 'Продукты'},
		{id:3, name: 'Продукты'},
	];

	const listItems = numbers.map((number) => <li class="list-group-item">{number.id}{number.name}</li>);

	return(
		<div>
			<hr/>
				<Button onClick={Click1()} text="Создать"/>
			<hr/>
			<ul class="list-group">
			  {listItems}
			</ul>
		</div>
	)
}