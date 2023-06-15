import { connect } from 'react-redux';
import React, { Component } from 'react';
import propTypes from 'prop-types';
import Option from './Option';
import { thunkCurrencies, thunkSave } from '../redux/actions';

class WalletForm extends Component {
  state = {
    id: '',
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(thunkCurrencies());
  }

  handleChange = ({ target }) => {
    const { expenses } = this.props;
    const { value, name } = target;
    this.setState((prev) => ({
      ...prev,
      [name]: value,
      id: expenses.length,
    }));
  };

  saveBtn = () => {
    const { dispatch, expenses } = this.props;
    const data = [...expenses, this.state];
    dispatch(thunkSave(data));
  };

  render() {
    const { coins } = this.props;
    const method = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <div>
        <label>
          Valor:
          {' '}
          <input
            data-testid="value-input"
            type="number"
            placeholder="0"
            onChange={ this.handleChange }
            name="value"
          />
        </label>
        <label>
          Moeda:
          {' '}
          <select
            data-testid="currency-input"
            name="currency"
            onChange={ this.handleChange }
          >
            { coins.map((v) => <Option value={ v } key={ v } />)}
          </select>
        </label>
        <label>
          Método de pagamento:
          {' '}
          <select
            data-testid="method-input"
            name="method"
            onChange={ this.handleChange }
          >
            { method.map((v) => <Option value={ v } key={ v } />)}
          </select>
        </label>
        <label>
          Categoria:
          {' '}
          <select
            data-testid="tag-input"
            name="tag"
            onChange={ this.handleChange }
          >
            { tag.map((v) => <Option value={ v } key={ v } />)}
          </select>
        </label>
        <label>
          Descrição:
          {' '}
          <input
            data-testid="description-input"
            type="text"
            placeholder=""
            name="description"
            onChange={ this.handleChange }
          />
        </label>
        <button onClick={ this.saveBtn }>Adicionar despesa</button>
      </div>
    );
  }
}

WalletForm.propTypes = {
  coins: propTypes.string.isRequired,
  dispatch: propTypes.func.isRequired,
  expenses: propTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  coins: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(WalletForm);
