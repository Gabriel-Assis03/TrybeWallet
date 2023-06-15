import propTypes from 'prop-types';
import React, { Component } from 'react';

class Option extends Component {
  render() {
    const { value } = this.props;
    return <option value={ value }>{ value }</option>;
  }
}

Option.propTypes = {
  value: propTypes.string.isRequired,
};

export default Option;
