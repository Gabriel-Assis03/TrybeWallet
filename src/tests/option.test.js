import React from 'react';
import { screen, render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { renderWithRedux, renderWithRouter, renderWithRouterAndRedux } from './helpers/renderWith';
import Option from '../components/Option';

describe('testando o option', () => {
  it('option test 1', () => {
    render(<Option value="asd" />);
    const text = screen.getByText('asd');
    expect(text).toBeInTheDocument();
  });
});
