import React from 'react';

class List extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='list-container'>
				<div className='left-icon'>
					123
				</div>
				<div className='right-desc'>
					456
				</div>
			</div>
		)
	}
}

export default List;
