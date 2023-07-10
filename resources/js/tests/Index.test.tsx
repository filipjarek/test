import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Index from '../pages/Index/Index';

test('renders index page with add channel button', () => {
  render(
    <MemoryRouter>
      <Index />
    </MemoryRouter>
  );

  const addButtonElement = screen.getByText('Add Channel');
  const chartViewerElement = screen.queryByText('Wykres kołowy');
  const channelsManagerElement = screen.queryByText('Lista kanałów');
  const scrollToTopButtonElement = screen.getByRole('button', { name: 'Scroll to Top' });

  expect(addButtonElement).toBeInTheDocument();
  expect(chartViewerElement).toBeNull();
  expect(channelsManagerElement).toBeNull();
  expect(scrollToTopButtonElement).toBeInTheDocument();
});

