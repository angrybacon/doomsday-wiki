import React from 'react';
import { render, screen } from '@testing-library/react';
import { ArticleCard, Props } from '@/components/ArticleCard/ArticleCard';
import { Kind } from '@/tools/markdown/constants/Kind';

jest.mock('@/components/ArticleChip/ArticleChip', () => ({
  ArticleChip: 'div',
}));

describe(ArticleCard.name, () => {
  let props: Props;

  beforeEach(() => {
    props = {
      href: '/path/to/article',
      matter: {
        bannerData: { art: '', title: '' },
        date: null,
        kind: Kind.ARTICLE,
        title: 'Article Title',
      },
    };
  });

  it('should render nothing when no banner is provided', () => {
    // Given
    props.matter.bannerData = undefined;
    // When
    const { container } = render(<ArticleCard {...props} />);
    // Then
    expect(container).toBeEmptyDOMElement();
  });

  it('should render the title', () => {
    // Given
    props.matter.title = 'New Article Title';
    // When
    render(<ArticleCard {...props} />);
    // Then
    expect(screen.getByText(props.matter.title)).toBeInTheDocument();
  });

  it('should render the banner as background when provided', () => {
    // Given
    const bannerArt = 'protocol://domain.tld/path/to/resource';
    const bannerTitle = 'Banner title';
    props.matter.bannerData = { art: bannerArt, title: bannerTitle };
    // When
    const { container } = render(<ArticleCard {...props} />);
    // Then
    const element = container.firstChild;
    expect(element).toHaveStyle(`background-image: url(${bannerArt})`);
    expect(element).toHaveAccessibleName(bannerTitle);
  });
});
