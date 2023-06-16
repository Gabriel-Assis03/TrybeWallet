import propTypes from 'prop-types';
import React, { Component } from 'react';

class Tr extends Component {
  render() {
    const { element, deletFunc } = this.props;
    const coin = element.currency;// pega a moeda, USD, EUR, etc
    const coinName = element.exchangeRates[coin].name;
    const coinValue = element.exchangeRates[coin].ask;
    const { value } = element;
    const valueReal = value * coinValue;
    return (
      <tr id={ element.id }>
        <td>{ element.description }</td>
        <td>{ element.tag }</td>
        <td>{ element.method }</td>
        <td>{ Number(value).toFixed(2) }</td>
        <td>{ coinName }</td>
        <td>{ Number(coinValue).toFixed(2) }</td>
        <td>{ Number(valueReal).toFixed(2) }</td>
        <td>Real</td>
        <td>
          <button>Editar</button>
          {' '}
          /
          {' '}
          <button
            data-testid="delete-btn"
            id={ element.id }
            onClick={ () => deletFunc(element.id) }
          >
            Excluir

          </button>
        </td>
      </tr>
    );
  }
}

Tr.propTypes = {
  element: propTypes.string.isRequired,
  deletFunc: propTypes.func.isRequired,
};

export default Tr;
