import React, { Component } from 'react'

import './root.less'

import Swipe from './swipe.js'


class Page extends Component {
	componentDidMount() {
		this.swipe = new Swipe(this.container, {
			dots: true,
			interval: 3500,
			index: 0
		})
		this.swipe.init()
	}

	componentWillUnmount() {
		this.swipe.destroy()
	}

	render() {
		return <div className="container" ref={ node => this.container = node }>
			<div className="wrapper">
				<div className="slide">1</div>
				<div className="slide">2</div>
				<div className="slide">3</div>
				<div className="slide">4</div>
				<div className="slide">5</div>
			</div>
		</div>
	}
}


export default Page;