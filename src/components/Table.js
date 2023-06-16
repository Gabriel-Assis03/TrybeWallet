import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Tr from './Tr';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
          {
            expenses.map((e) => <Tr element={ e } key={ e.id } />)
          }
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: propTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
