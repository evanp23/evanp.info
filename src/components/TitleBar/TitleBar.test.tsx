import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TitleBar from './TitleBar';

describe('<TitleBar />', () => {
  test('it should mount', () => {
    render(<TitleBar />);
    
    const titleBar = screen.getByTestId('TitleBar');

    expect(titleBar).toBeInTheDocument();
  });
});