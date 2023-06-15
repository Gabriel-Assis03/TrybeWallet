import React, { Component } from 'react';

class WalletForm extends Component {
  render() {
    return (
      <div>
        <label>
          Valor:
          {' '}
          <input data-testid="value-input" type="number" placeholder="0" />
        </label>
        <label>
          Moeda:
          {' '}
          <select data-testid="currency-input">
            <option value="valor1">Valor 1</option>
          </select>
        </label>
        <label>
          Descrição:
          {' '}
          <input data-testid="description-input" type="text" placeholder="" />
        </label>
      </div>
    );
  }
}

export default WalletForm;
