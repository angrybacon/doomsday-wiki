import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card, Props } from '@/components/Card/Card';
import type { ScryCard } from '@/tools/scryfall/types';

describe(Card.name, () => {
  let props: Props;

  beforeEach(() => {
    props = {
      data: {
        artist: 'Firstname Lastname',
        images: { full: 'protocol://path/to/resource.png' },
        name: 'Card Name',
        setName: 'Set Name',
      } as ScryCard,
    };
  });

  it('should render nothing when URLs are not available', () => {
    // Given
    props.data = { images: {} } as ScryCard;
    // When
    const { container } = render(<Card {...props} />);
    // Then
    expect(container).toBeEmptyDOMElement();
  });

  it('should set the source attribute to the provided URL', () => {
    // Given
    const url = 'protocol://path/to/resource.png';
    props.data = { images: { full: url } } as ScryCard;
    // When
    render(<Card {...props} />);
    // Then
    expect(screen.getByRole('img')).toHaveAttribute('src', url);
  });

  it('should set the accessible name', () => {
    // Given
    props.data.name = 'Card Name';
    props.data.artist = 'Firstname Lastname';
    props.data.setName = 'Set Name';
    // When
    render(<Card {...props} />);
    // Then
    const title = '"Card Name" from Set Name - Art by Firstname Lastname';
    expect(screen.getByRole('img')).toHaveAccessibleName(title);
  });
});
