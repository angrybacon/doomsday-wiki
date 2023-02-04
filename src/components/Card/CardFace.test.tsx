import { render, screen } from '@testing-library/react';
import { CardFace, Props } from '@/components/Card/CardFace';
import type { ScryCard } from '@/tools/scryfall/types';

describe(CardFace.name, () => {
  let props: Props;

  beforeEach(() => {
    props = {
      active: true,
      data: {
        artist: 'Firstname Lastname',
        images: { full: 'protocol://path/to/resource.png' },
        name: 'Card Name',
        setName: 'Set Name',
      } as ScryCard,
    };
  });

  it('should set the image source attribute to the provided URL', () => {
    // Given
    const url = 'protocol://path/to/resource.png';
    props.data = { images: { full: url } } as ScryCard;
    // When
    render(<CardFace {...props} />);
    // Then
    expect(screen.getByRole('img')).toHaveAttribute('src', url);
  });

  it('should set the accessible name', () => {
    // Given
    props.data.name = 'Card Name';
    props.data.artist = 'Firstname Lastname';
    props.data.setName = 'Set Name';
    // When
    render(<CardFace {...props} />);
    // Then
    const title = '"Card Name" from Set Name - Art by Firstname Lastname';
    expect(screen.getByRole('img')).toHaveAccessibleName(title);
  });

  it('should be visible when active', () => {
    // Given
    props.active = true;
    // When
    render(<CardFace {...props} />);
    // Then
    expect(screen.getByRole('img')).toBeVisible();
  });

  it('should not be visible when inactive', () => {
    // Given
    props.active = false;
    // When
    render(<CardFace {...props} />);
    // Then
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});
