import propTypes from 'prop-types';
import React, { Component } from 'react';

class Tr extends Component {
  render() {
    const { element } = this.props;
    const coin = element.currency;// pega a moeda, USD, EUR, etc
    const coinName = element.exchangeRates[coin].name;
    const coinValue = element.exchangeRates[coin].ask;
    const { value } = element;
    const valueReal = value * coinValue;
    return (
      <tr>
        <td>{ element.description }</td>
        <td>{ element.tag }</td>
        <td>{ element.method }</td>
        <td>{ Number(value).toFixed(2) }</td>
        <td>{ coinName }</td>
        <td>{ Number(coinValue).toFixed(2) }</td>
        <td>{ Number(valueReal).toFixed(2) }</td>
        <td>Real</td>
        <td>a/s</td>
      </tr>
    );
  }
}

Tr.propTypes = {
  element: propTypes.string.isRequired,
};

export default Tr;
