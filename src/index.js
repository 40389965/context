import { render } from 'react-dom'
import React from 'react'
import {CounterProvider} from './CounterStore'
import App from './App'

render(
	<CounterProvider>
		<App></App>
	</CounterProvider>,
	document.querySelector('#root')
)
