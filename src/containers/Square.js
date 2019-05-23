import React, { Component } from 'react';


class Square extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: null,
		};
	}

	render() {
		return(
			<div>
				<button className='square' onClick={()=>alert('click')}>{this.props.value}</button>
			</div>
		);
	}
}

export default Square;