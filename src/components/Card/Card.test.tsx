import { render, screen } from '@testing-library/react';
import { Card, Props } from '@/components/Card/Card';
import type { ScryCard } from '@/tools/scryfall/types';

describe(Card.name, () => {
  let props: Props;
  const dummyCard = {
    artist: 'Firstname Lastname',
    images: { full: 'protocol://path/to/resource.png' },
    name: 'Card Name',
    setName: 'Set Name',
  };

  beforeEach(() => {
    props = {
      data: [] as ScryCard[],
    };
  });

  it('should render a card face for each one provided', () => {
    // Given
    props.data = [
      { ...dummyCard, name: 'One' },
      { ...dummyCard, name: 'Two' },
    ] as ScryCard[];
    // When
    render(<Card {...props} />);
    // Then
    const faces = screen.getAllByRole('img', { hidden: true });
    expect(faces.length).toEqual(2);
  });

  it('should render a button to flip faces when there are multiple faces', () => {
    // Given
    props.data = [
      { ...dummyCard, name: 'One' },
      { ...dummyCard, name: 'Two' },
    ] as ScryCard[];
    // When
    render(<Card {...props} />);
    // Then
    const button = screen.getByRole('button', { name: 'Flip' });
    expect(button).toBeInTheDocument();
  });

  it('should not render a button when there is only one face', () => {
    // Given
    props.data = [{ ...dummyCard }] as ScryCard[];
    // When
    render(<Card {...props} />);
    // Then
    const button = screen.queryByRole('button', { name: 'Flip' });
    expect(button).not.toBeInTheDocument();
  });
});
