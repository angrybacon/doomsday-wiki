import React from 'react';
import { render, screen } from '@testing-library/react';
import { Column, Props } from '@/components/Decklist/Column';

describe(Column.name, () => {
  let props: Props;

  beforeEach(() => {
    props = { cards: [] };
  });

  it('should not render anything with 0 cards', () => {
    // Given
    props.cards = [];
    // When
    const { container } = render(<Column {...props} />);
    // Then
    expect(container).toBeEmptyDOMElement();
  });

  it('should render an item for each provided card', () => {
    // Given
    props.cards = [
      [4, 'Doomsday'],
      [2, 'Brainstorm'],
    ];
    // When
    render(<Column {...props} />);
    // Then
    const items = screen.getAllByRole('listitem');
    expect(items.length).toEqual(props.cards.length);
  });

  it('should render the card amounts and names', () => {
    // Given
    props.cards = [
      [4, 'Doomsday'],
      [2, 'Brainstorm'],
    ];
    // When
    render(<Column {...props} />);
    // Then
    const [one, two] = screen.getAllByRole('listitem');
    expect(one).toHaveTextContent('4Doomsday');
    expect(two).toHaveTextContent('2Brainstorm');
  });
});
