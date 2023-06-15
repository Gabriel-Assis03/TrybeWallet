import React from 'react';
// import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('testando o App', () => {
  it('App test 1', () => {
    renderWithRouterAndRedux(<App />);
  });
});
