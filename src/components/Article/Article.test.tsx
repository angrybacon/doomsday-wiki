import React from 'react';
import { render, screen } from '@testing-library/react';
import { Article, Props } from '@/components/Article/Article';
import { useStyles } from '@/components/Article/Article.styles';

jest.mock('@/components/Article/Article.styles');

describe(Article.name, () => {
  let props: Props;

  beforeEach(() => {
    props = { route: '/path/to/article' };
    (useStyles as jest.Mock).mockReturnValueOnce({});
  });

  it('should render the title if provided', () => {
    // Given
    props.matter = { title: 'Article Title' };
    // When
    render(<Article {...props} />);
    // Then
    expect(screen.getByText(props.matter.title)).toBeInTheDocument();
  });

  it('should render the route otherwise', () => {
    // Given
    props.matter = undefined;
    props.route = '/path/to/article';
    // When
    render(<Article {...props} />);
    // Then
    expect(screen.getByText(props.route)).toBeInTheDocument();
  });

  it('should render the authors if provided', () => {
    // Given
    props.matter = { authors: 'Foo, Bar' };
    // When
    render(<Article {...props} />);
    // Then
    expect(screen.getByText(props.matter.authors)).toBeInTheDocument();
  });

  it('should render the date if provided', () => {
    // Given
    props.matter = { date: 'January 1, 1970' };
    // When
    render(<Article {...props} />);
    // Then
    expect(screen.getByText(props.matter.date)).toBeInTheDocument();
  });

  describe('Article banner', () => {
    it('should render the banner as background when provided', () => {
      // Given
      const banner = 'protocol://domain.tld/path/to/resource';
      props.matter = { banner };
      // When
      const { container } = render(<Article {...props} />);
      // Then
      expect(container.firstChild).toHaveStyle(
        `background-image: url(${banner})`
      );
    });

    it('should provide the card name and artist when they are available', () => {
      // Given
      const bannerArtist = 'Firstname Lastname';
      const bannerName = 'Card Name';
      props.matter = { bannerArtist, bannerName };
      // When
      const { container } = render(<Article {...props} />);
      // Then
      expect(container.firstChild).toHaveAccessibleName(
        `${bannerName} by ${bannerArtist}`
      );
    });

    it('should provide the card name even when the artist is not available', () => {
      // Given
      const bannerName = 'Card Name';
      props.matter = { bannerName };
      // When
      const { container } = render(<Article {...props} />);
      // Then
      expect(container.firstChild).toHaveAccessibleName(bannerName);
    });

    it('should not provide accessible text when the details are not available', () => {
      // Given
      props.matter = {};
      // When
      const { container } = render(<Article {...props} />);
      // Then
      expect(container.firstChild).toHaveAccessibleName('');
    });
  });
});
