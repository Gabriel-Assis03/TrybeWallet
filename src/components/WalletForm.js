import { connect } from 'react-redux';
import React, { Component } from 'react';
import propTypes from 'prop-types';
import Option from './Option';
import { thunkCurrencies } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(thunkCurrencies());
  }

  render() {
    const { coins } = this.props;
    const method = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
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
            { coins.map((v) => <Option value={ v } key={ v } />)}
          </select>
        </label>
        <label>
          Método de pagamento:
          {' '}
          <select data-testid="method-input">
            { method.map((v) => <Option value={ v } key={ v } />)}
          </select>
        </label>
        <label>
          Categoria:
          {' '}
          <select data-testid="tag-input">
            { tag.map((v) => <Option value={ v } key={ v } />)}
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

WalletForm.propTypes = {
  coins: propTypes.string.isRequired,
  dispatch: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  coins: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
