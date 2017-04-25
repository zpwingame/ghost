import React, { PropTypes } from 'react';

class List extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		let { items } = this.props;
		let children
		if (items.length > 0) {
			children = (
				<ul>
					{items.map((item, index) =>
						<li key={index}>{item}</li>
					)}
				</ul>
			)
		} else {
			children = <p>No items found.</p>
		}
		return (
			<div className='list-container'>
				{children}
			</div>
		)
	}
}

export default List;
