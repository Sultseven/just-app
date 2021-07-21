import React, {Fragment} from 'react'
import {Button} from '../components/Button'
import {Form} from './../components/Form.jsx'
import {ListUsers} from './../components/ListUsers.jsx'

export const Random = (props) =>{

    const ClickName = () =>{
    	console.log("Hello, react")
    };

	return(
		<Fragment>
			<h1>Just do it</h1>
			<hr/>
			<Form name="Поиск"/>
			<hr/>
			<Button text="Создать"/>
			<hr/>
			<ListUsers />
		</Fragment>
	)
}