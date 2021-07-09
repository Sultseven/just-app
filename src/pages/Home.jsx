import React, {Fragment} from 'react'
import {Form} from '../components/Form'
import {Note} from '../components/Note'

export const Home = () =>{
	return(
		<Fragment>
			<Form/>
			<hr/>
			<Note/>
		</Fragment>
	)
}