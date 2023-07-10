import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddChannel from '../components/AddChannel';

test('calls createChannel function when form is submitted', () => {
  const createChannel = jest.fn();

  const { getByText } = render(
    <AddChannel
      actionMsg={false}
      objAnimation={false}
      createChannel={createChannel}
      channel_name=""
      setChannelName={() => {}}
      clients_amount=""
      setClientsAmount={() => {}}
      errors={{}}
    />
  );

  const submitButton = getByText('Dodaj kanał');

  fireEvent.click(submitButton);

  expect(createChannel).toHaveBeenCalledTimes(1);
});
