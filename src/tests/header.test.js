import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Header from '../components/Header';
import { renderWithRedux } from './helpers/renderWith';

describe('testando o header', () => {
  it('header test 1', () => {
    const initialState = {
      wallet: {
        expenses: [{
          id: 0,
          value: '123',
          description: 'oi',
          currency: 'USD',
          method: 'Dinheiro',
          tag: 'Alimentação',
          exchangeRates: {
            USD: {
              code: 'USD',
              codein: 'BRL',
              name: 'Dólar Americano/Real Brasileiro',
              high: '4.8114',
              low: '4.8107',
              varBid: '0.0005',
              pctChange: '0.01',
              bid: '4.8102',
              ask: '4.8112',
              timestamp: '1686867112',
              create_date: '2023-06-15 19:11:52',
            },
          },
        }],
      },
    };
    renderWithRedux(<Header />, { initialState });

    // const text = screen.getAllByText('Despesa total: R$ ');
    // expect(text[0]).toBeInTheDocument();
    const text2 = screen.getByText('591.78');
    expect(text2).toBeInTheDocument();
  });

  it('header test 2', () => {
    const initialState = {
      wallet: {
        expenses: [],
      },
    };
    renderWithRedux(<Header />, { initialState });

    // const text = screen.getAllByText('Despesa total: R$ ');
    // expect(text[0]).toBeInTheDocument();
    const text2 = screen.getByText('0.00');
    expect(text2).toBeInTheDocument();
  });
});
