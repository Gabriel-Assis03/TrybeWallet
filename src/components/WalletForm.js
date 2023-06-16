import { connect } from 'react-redux';
import React, { Component } from 'react';
import propTypes from 'prop-types';
import Option from './Option';
import { thunkCurrencies, thunkSave } from '../redux/actions';

class WalletForm extends Component {
  state = {
    id: 0,
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
    // const { expenses } = this.props;
    const { value, name } = target;
    this.setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  saveBtn = () => {
    const { dispatch, expenses, ali } = this.props;
    const data = [...expenses, this.state];
    dispatch(thunkSave(data));
    this.setState((prev) => ({
      ...prev,
      id: Number(prev.id) + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: ali,
    }));
  };

  render() {
    const { coins, ali } = this.props;
    const { value, description } = this.state;
    const method = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tag1 = [ali, 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
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
            value={ value }
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
            { tag1.map((v) => <Option value={ v } key={ v } />)}
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
            value={ description }
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
  ali: propTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  coins: state.wallet.currencies,
  expenses: state.wallet.expenses,
  ali: 'Alimentação',
});

export default connect(mapStateToProps)(WalletForm);
