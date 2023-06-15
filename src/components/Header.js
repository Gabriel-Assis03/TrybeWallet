import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;
    const despesa = '0.00';
    const cambio = 'BRL';
    return (
      <div>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{`Despesa total: R$ ${despesa}`}</p>
        <p data-testid="header-currency-field">{cambio}</p>
      </div>
    );
  }
}

Header.propTypes = {
  email: propTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);
