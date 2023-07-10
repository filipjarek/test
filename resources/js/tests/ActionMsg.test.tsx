import React from 'react';
import { render } from '@testing-library/react';
import ActionMsg from '../components/ActionMsg';

describe('ActionMsg component', () => {
  test('renders message when actionMsg is true', () => {
    const { getByText } = render(
      <ActionMsg actionMsg={true} objAnimation={false} />
    );
    const messageElement = getByText('Kanał został dodany!');
    expect(messageElement).toBeInTheDocument();
  });

  test('does not render message when actionMsg is false', () => {
    const { queryByText } = render(
      <ActionMsg actionMsg={false} objAnimation={false} />
    );
    const messageElement = queryByText('Kanał został dodany!');
    expect(messageElement).toBeNull();
  });
});
