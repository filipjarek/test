import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Router from '../router/Router';

test('renders router with correct routes', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Router />
    </MemoryRouter>
  );

  const indexChannelElement = screen.getByText('Index Channel');
  const createChannelElement = screen.queryByText('Create Channel');
  const footerElement = screen.getByText('Footer');

  expect(indexChannelElement).toBeInTheDocument();
  expect(createChannelElement).toBeNull();
  expect(footerElement).toBeInTheDocument();
});

test('navigates to create channel page', () => {
  render(
    <MemoryRouter initialEntries={['/channel/create']}>
      <Router />
    </MemoryRouter>
  );

  const indexChannelElement = screen.queryByText('Index Channel');
  const createChannelElement = screen.getByText('Create Channel');
  const footerElement = screen.getByText('Footer');

  expect(indexChannelElement).toBeNull();
  expect(createChannelElement).toBeInTheDocument();
  expect(footerElement).toBeInTheDocument();
});
