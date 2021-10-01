import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card, Props } from '@/components/Card/Card';
import type { ScryDataItem } from '@/tools/scryfall/types';

describe(Card.name, () => {
  let props: Props;

  beforeEach(() => {
    props = {
      data: {
        // eslint-disable-next-line camelcase
        image_uris: { border_crop: 'protocol://path/to/resource.png' },
        name: 'Card Name',
      } as ScryDataItem,
      query: 'Card Name | SET',
    };
    jest.clearAllMocks();
  });

  it('should render nothing when URL is not available', () => {
    // Given
    // eslint-disable-next-line camelcase
    props.data = { image_uris: {} } as ScryDataItem;
    // When
    const { container } = render(<Card {...props} />);
    // Then
    expect(container).toBeEmptyDOMElement();
  });

  it('should set a source attribute', () => {
    // Given
    const url = 'protocol://path/to/resource.png';
    // eslint-disable-next-line camelcase
    props.data = { image_uris: { border_crop: url } } as ScryDataItem;
    // When
    render(<Card {...props} />);
    // Then
    expect(screen.getByRole('img')).toHaveAttribute('src', url);
  });

  it('should set the accessible name', () => {
    // Given
    const name = 'Card Name';
    props.data.name = name;
    // When
    render(<Card {...props} />);
    // Then
    expect(screen.getByRole('img')).toHaveAccessibleName(name);
  });

  it('should fallback to the Scryfall query if the name is not available', () => {
    // Given
    props.data.name = '';
    props.query = 'Card Name | SET';
    // When
    render(<Card {...props} />);
    // Then
    expect(screen.getByRole('img')).toHaveAccessibleName(props.query);
  });
});
