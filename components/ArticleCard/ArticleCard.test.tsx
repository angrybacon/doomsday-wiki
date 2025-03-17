import { type ComponentProps } from 'react';

import { ArticleCard } from '@/components/ArticleCard/ArticleCard';
import { render, screen } from '@/tools/test';

jest.mock('@/components/ArticleChip/ArticleChip', () => ({
  ArticleChip: 'div',
}));

describe(ArticleCard.name, () => {
  let props: ComponentProps<typeof ArticleCard>;

  beforeEach(() => {
    props = {
      banner: {
        art: '',
        artPreview: '',
        flavor: null,
        title: '',
      },
      date: null,
      href: '/path/to/article',
      matter: {
        authors: 'Firstname Lastname',
        banner: 'banner',
        kind: 'ARTICLE',
        tags: [],
        title: 'Article Title',
      },
    };
  });

  it('should render the title', () => {
    // Given
    props.matter.title = 'New Article Title';
    // When
    render(<ArticleCard {...props} />);
    // Then
    expect(screen.getByText(props.matter.title)).toBeInTheDocument();
  });

  it('should render the banner as background', () => {
    // Given
    props.banner = {
      art: 'protocol://domain.tld/path/to/art',
      artPreview: 'protocol://domain.tld/path/to/preview',
      flavor: null,
      title: 'Banner title',
    };
    // When
    const { container } = render(<ArticleCard {...props} />);
    // Then
    const element = container.firstChild;
    expect(element).toHaveStyle(`background-image: url(${props.banner.art})`);
    expect(element).toHaveAccessibleName(props.banner.title);
  });
});
