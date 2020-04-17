import React, { Component } from 'react'
import {CounterConsumer} from '../../CounterStore'


export class Counter extends Component {
	render() {
		return (
			<CounterConsumer>{({ count }) => <span>{count}</span>}</CounterConsumer>
		)
	}
}
