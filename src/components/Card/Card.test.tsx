import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Card, Props } from '@/components/Card/Card';
import { scry } from '@/tools/scryfall/scry';

jest.mock('@/tools/scryfall/scry');

describe(Card.name, () => {
  let props: Props;

  beforeEach(() => {
    props = { query: 'Card Name | SET' };
    jest.clearAllMocks();
    (scry as jest.Mock).mockResolvedValue({
      data: {
        image_uris: { png: undefined },
        name: undefined,
      },
    });
  });

  it('should scry for the provided query', async () => {
    // Given
    const name = 'Card Name';
    const set = 'SET';
    props.query = `${name} | ${set}`;
    // When
    render(<Card {...props} />);
    // Then
    await waitFor(() => {
      expect(scry).toHaveBeenCalledTimes(1);
      expect(scry).toHaveBeenCalledWith(name, set);
    });
  });

  it('should trim the name and set', async () => {
    // Given
    const name = 'Card Name';
    const set = 'SET';
    props.query = `  ${name}  |  ${set}  `;
    // When
    render(<Card {...props} />);
    // Then
    await waitFor(() => {
      expect(scry).toHaveBeenCalledTimes(1);
      expect(scry).toHaveBeenCalledWith(name, set);
    });
  });

  it('should allow scrying with a name only', async () => {
    // Given
    props.query = 'Card Name';
    // When
    render(<Card {...props} />);
    // Then
    await waitFor(() => {
      expect(scry).toHaveBeenCalledTimes(1);
      expect(scry).toHaveBeenCalledWith(props.query, undefined);
    });
  });

  it('should set the image attributes', async () => {
    // Given
    const name = 'Card Name';
    const path = 'image.png';
    (scry as jest.Mock).mockResolvedValue({
      data: { image_uris: { png: path }, name },
    });
    // When
    render(<Card {...props} />);
    // Then
    await waitFor(() => {
      const image = screen.getByRole('img');
      expect(image).toHaveAccessibleName(name);
      expect(image).toHaveAttribute('src', path);
    });
  });
});
