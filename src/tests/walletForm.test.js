import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WalletForm from '../components/WalletForm';
import { renderWithRedux } from './helpers/renderWith';

describe('testando o header', () => {
  it('WalletForm test 1', () => {
    renderWithRedux(<WalletForm />);

    const valor = screen.getByTestId('value-input');
    expect(valor).toBeInTheDocument();
    const currency = screen.getByTestId('currency-input');
    expect(currency).toBeInTheDocument();
    const method = screen.getByTestId('method-input');
    expect(method).toBeInTheDocument();
    const tag = screen.getByTestId('tag-input');
    expect(tag).toBeInTheDocument();
    const description = screen.getByTestId('description-input');
    expect(description).toBeInTheDocument();
  });

  it('WalletForm test 2', () => {
    renderWithRedux(<WalletForm />);
    const btn = screen.getByText('Adicionar despesa');
    expect(btn).toBeInTheDocument();
    userEvent.click(btn);
  });

  it('WalletForm test 3', () => {
    const initialState = {
      wallet: {
        currencies: ['oi', 'hi'],
        expenses: [],
      },
    };
    renderWithRedux(<WalletForm />, { initialState });
    const valor = screen.getByTestId('value-input');
    expect(valor).toBeInTheDocument();
    userEvent.type(valor, '123');
  });
});
