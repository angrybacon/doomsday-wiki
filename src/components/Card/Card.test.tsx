import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card, Props } from '@/components/Card/Card';
import type { ScryDataItem } from '@/tools/scryfall/types';

describe(Card.name, () => {
  let props: Props;

  beforeEach(() => {
    props = {
      data: {
        /* eslint-disable camelcase */
        artist: 'Firstname Lastname',
        image_uris: { border_crop: 'protocol://path/to/resource.png' },
        name: 'Card Name',
        set_name: 'Set Name',
        /* eslint-enable camelcase */
      } as ScryDataItem,
    };
  });

  it('should render nothing when URLs are not available', () => {
    // Given
    // eslint-disable-next-line camelcase
    props.data = { image_uris: {} } as ScryDataItem;
    // When
    const { container } = render(<Card {...props} />);
    // Then
    expect(container).toBeEmptyDOMElement();
  });

  it('should set the source attribute to the provided URL', () => {
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
    props.data.name = 'Card Name';
    props.data.artist = 'Firstname Lastname';
    // eslint-disable-next-line camelcase
    props.data.set_name = 'Set Name';
    // When
    render(<Card {...props} />);
    // Then
    const title = '"Card Name" from Set Name - Art by Firstname Lastname';
    expect(screen.getByRole('img')).toHaveAccessibleName(title);
  });
});
