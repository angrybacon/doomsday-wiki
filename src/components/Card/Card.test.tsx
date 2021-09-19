import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card, Props } from '@/components/Card/Card';

describe(Card.name, () => {
  let props: Props;

  beforeEach(() => {
    props = {
      data: {
        // eslint-disable-next-line camelcase
        image_uris: { png: 'protocol://path/to/resource.png' },
        name: 'Card Name',
      },
      query: 'Card Name | SET',
    };
    jest.clearAllMocks();
  });

  it('should render nothing when URL is not available', () => {
    // Given
    delete props.data.image_uri;
    // When
    const { container } = render(<Card {...props} />);
    // Then
    expect(container.firstChild).toBeEmptyDOMElement();
  });

  it('should set a source attribute', () => {
    // Given
    const url = 'protocol://path/to/resource.png';
    props.data.image_uris.png = url;
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
    // @ts-expect-error: We do not control the content of data
    delete props.data.name;
    props.query = 'Card Name | SET';
    // When
    render(<Card {...props} />);
    // Then
    expect(screen.getByRole('img')).toHaveAccessibleName(props.query);
  });
});
