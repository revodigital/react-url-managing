/*
 * Copyright (c) 2022. Revo Digital
 * ---
 * Author: gabriele
 * File: App.test.tsx
 * Project: react-url-managing
 * Committed last: 2022/7/21 @ 1450
 * ---
 * Description:
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
