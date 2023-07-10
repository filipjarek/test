import React from 'react';
import { render } from '@testing-library/react';
import ChartViewer from '../components/ChartViewer';

test('renders chart with provided data', () => {
  const channels = [
    {
      channel_name: 'Channel 1',
      clients_amount: 50,
      channel_color: '#ff0000',
    },
    {
      channel_name: 'Channel 2',
      clients_amount: 30,
      channel_color: '#00ff00',
    },
    {
      channel_name: 'Channel 3',
      clients_amount: 20,
      channel_color: '#0000ff',
    },
  ];

  const { getByText } = render(<ChartViewer channels={channels} />);

  expect(getByText('Channel 1')).toBeInTheDocument();
  expect(getByText('Channel 2')).toBeInTheDocument();
  expect(getByText('Channel 3')).toBeInTheDocument();

  expect(getByText('55.56%')).toBeInTheDocument();
  expect(getByText('33.33%')).toBeInTheDocument();
  expect(getByText('22.22%')).toBeInTheDocument();
});
