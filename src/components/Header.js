import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  calculatingExpense = (expenses) => {
    // ve se tem alguma divida no estado global
    if (expenses.length === 0) {
      return '0.00';
    }
    // se tiver calcula o valor de todas elas
    return expenses.reduce((acc, ex) => {
      // transforma o valor em real
      const coin = ex.currency;// pega a moeda, USD, EUR, etc
      const coinValue = ex.exchangeRates[coin].ask;// pega o valor da moeda no momento que a divida foi criada da divida
      return Number(acc) + Number(ex.value * coinValue);
    }, 0).toFixed(2);
  };

  render() {
    const { email, expenses, loading } = this.props;
    const despesa = this.calculatingExpense(expenses);
    const cambio = 'BRL';
    return (
      <div>
        <p data-testid="email-field">{ email }</p>
        <label>
          {'Despesa total: R$ '}
          {
            loading
              ? <p data-testid="total-field">{despesa}</p>
              : <p>Carregando...</p>
          }
        </label>
        <p data-testid="header-currency-field">{cambio}</p>
      </div>
    );
  }
}

Header.propTypes = {
  email: propTypes.string.isRequired,
  expenses: propTypes.string.isRequired,
  loading: propTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  loading: state.wallet.loading,
});

export default connect(mapStateToProps)(Header);
