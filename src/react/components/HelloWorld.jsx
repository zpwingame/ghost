import React, {PropTypes} from 'react';

class HelloWorld extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {name} = this.props;
    return (
      <div>
        <h2>Hello, {name}</h2>
      </div>
    );
  }
}

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HelloWorld;
