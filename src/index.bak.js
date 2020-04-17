import { render } from 'react-dom'
import React, { Component, createContext } from 'react'

console.log(createContext())

const { Provider, Consumer: CounterConsumer } = createContext()

class CounterProvider extends Component {
	constructor() {
		super()
		this.state = {
			count: 100
		}
	}
	incrementCount = () => {
		this.setState({
			count: this.state.count + 1
		})
	}
	decrementCount = () => {
		this.setState({
			count: this.state.count - 1
		})
	}
	render() {
		return (
			<Provider
				value={{
					count: this.state.count,
					add: this.incrementCount,
					sub: this.decrementCount
				}}
			>
				{this.props.children}
			</Provider>
		)
	}
}

class Counter extends Component {
	render() {
		return (
			<CounterConsumer>{({ count }) => <span>{count}</span>}</CounterConsumer>
		)
	}
}

class CountBtn extends Component {
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

class App extends Component {
	render() {
		return (
			<div>
				<CountBtn type="decrement">-</CountBtn>
				<Counter></Counter>
				<CountBtn type="increment">+</CountBtn>
			</div>
		)
	}
}
render(
	<CounterProvider>
		<App></App>
	</CounterProvider>,
	document.querySelector('#root')
)
