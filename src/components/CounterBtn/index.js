import React, { Component } from 'react'
import {CounterConsumer} from '../../CounterStore'

export class CounterBtn extends Component {
	render() {
		return (
			<CounterConsumer>
				{({ add, sub }) => {
					const handleClick = this.props.type === 'increment' ? add : sub
					return <button onClick={handleClick}>{this.props.children}</button>
				}}
			</CounterConsumer>
		)
	}
}
