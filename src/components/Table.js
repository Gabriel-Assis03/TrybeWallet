import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveData, loadingFalse, loadingTrue } from '../redux/actions';
import Tr from './Tr';

class Table extends Component {
  state = {
    loading: true,
  };

  deletElement = (id) => {
    const { expenses, dispatch } = this.props;
    dispatch(loadingFalse());
    this.setState((prev) => ({
      ...prev,
      loading: false,
    }));
    const element = expenses.find((e) => e.id === id);
    const index = expenses.indexOf(element);
    expenses.splice(index, 1);
    dispatch(saveData(expenses));
    this.setState((prev) => ({
      ...prev,
      loading: true,
    }));
    dispatch(loadingTrue());
  };

  render() {
    const { expenses } = this.props;
    const { loading } = this.state;
    return (
      <div>
        <table>
          <thead>
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
          </thead>
          <tbody>
            {
              loading
                ? expenses.map((e) => (
                  <Tr
                    element={ e }
                    key={ e.id }
                    deletFunc={ this.deletElement }
                  />
                )) : <p>Carregando...</p>
            }
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  dispatch: propTypes.func.isRequired,
  expenses: propTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
