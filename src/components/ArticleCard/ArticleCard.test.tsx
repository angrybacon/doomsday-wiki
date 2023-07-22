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
      banner: {
        art: '',
        artPreview: '',
        flavor: null,
        title: '',
      },
      date: null,
      day: '23',
      matter: {
        authors: 'Firstname Lastname',
        banner: 'banner',
        kind: Kind.ARTICLE,
        tags: [],
        title: 'Article Title',
      },
      month: '04',
      route: '/path/to/article',
      slug: 'article',
      year: '2023',
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
