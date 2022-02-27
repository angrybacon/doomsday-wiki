import React from 'react';
import { render, screen } from '@testing-library/react';
import { Article, Props } from '@/components/Article/Article';
import { useStyles } from '@/components/Article/Article.styles';
import { Kind } from '@/tools/markdown/constants/Kind';

jest.mock('@/components/Article/Article.styles');

describe(Article.name, () => {
  let props: Props;

  beforeEach(() => {
    props = {
      matter: {
        bannerData: { art: '', title: '' },
        date: null,
        kind: Kind.ARTICLE,
        title: 'Article Title',
      },
      route: '/path/to/article',
    };
    (useStyles as jest.Mock).mockReturnValueOnce({});
  });

  it('should render nothing when no banner is provided', () => {
    // Given
    props.matter.bannerData = undefined;
    // When
    const { container } = render(<Article {...props} />);
    // Then
    expect(container).toBeEmptyDOMElement();
  });

  it('should render the title', () => {
    // Given
    props.matter.title = 'New Article Title';
    // When
    render(<Article {...props} />);
    // Then
    expect(screen.getByText(props.matter.title)).toBeInTheDocument();
  });

  it('should render the authors when provided', () => {
    // Given
    props.matter.authors = 'Foo, Bar';
    // When
    render(<Article {...props} />);
    // Then
    expect(screen.getByText(props.matter.authors)).toBeInTheDocument();
  });

  it('should render the date when provided', () => {
    // Given
    props.matter.date = 'January 1, 1970';
    // When
    render(<Article {...props} />);
    // Then
    expect(screen.getByText(props.matter.date)).toBeInTheDocument();
  });

  describe('Article banner', () => {
    it('should render the banner as background when provided', () => {
      // Given
      const bannerArt = 'protocol://domain.tld/path/to/resource';
      const bannerTitle = 'Banner title';
      props.matter.bannerData = { art: bannerArt, title: bannerTitle };
      // When
      const { container } = render(<Article {...props} />);
      // Then
      const element = container.firstChild;
      expect(element).toHaveStyle(`background-image: url(${bannerArt})`);
      expect(element).toHaveAccessibleName(bannerTitle);
    });
  });
});
