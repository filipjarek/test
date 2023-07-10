import React from 'react';
import { render, screen } from '@testing-library/react';
import ChannelsManager from '../components/ChannelsManager';

test('renders channels', () => {
  const channels = [
    {
      id: 1,
      channel_name: 'Channel 1',
      clients_amount: 50,
      channel_color: '#ff0000',
    },
    {
      id: 2,
      channel_name: 'Channel 2',
      clients_amount: 30,
      channel_color: '#00ff00',
    },
    {
      id: 3,
      channel_name: 'Channel 3',
      clients_amount: 20,
      channel_color: '#0000ff',
    },
  ];

  render(<ChannelsManager channels={channels} />);

  expect(screen.getByText('Channel 1')).toBeInTheDocument();
  expect(screen.getByText('Channel 2')).toBeInTheDocument();
  expect(screen.getByText('Channel 3')).toBeInTheDocument();

  expect(screen.getByText('50')).toBeInTheDocument();
  expect(screen.getByText('30')).toBeInTheDocument();
  expect(screen.getByText('20')).toBeInTheDocument();
});
