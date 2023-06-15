import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
// import Login from '../pages/Login';
import App from '../App';

describe('testando o Login', () => {
  it('Login test 1', () => {
    renderWithRouterAndRedux(<App />);
    const email = screen.getByTestId('email-input');
    expect(email).toBeInTheDocument();
    userEvent.type(email, 'asd@asd.asd');

    const password = screen.getByTestId('password-input');
    expect(password).toBeInTheDocument();
    userEvent.type(password, '159756');

    const btn = screen.getByText('Entrar');
    userEvent.click(btn);
  });
});
