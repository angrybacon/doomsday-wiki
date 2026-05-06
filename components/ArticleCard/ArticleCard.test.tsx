import { type ComponentPropsWithoutRef } from 'react';

import { ArticleCard } from '@/components/ArticleCard/ArticleCard';
import { render, screen } from '@/tools/test';

describe(ArticleCard.name, () => {
  let props: ComponentPropsWithoutRef<typeof ArticleCard>;

  beforeEach(() => {
    props = {
      authors: 'Firstname Lastname',
      banner: {
        art: '',
        flavor: null,
        label: '',
        lqip: '',
        title: '',
      },
      date: null,
      href: '/path/to/article',
      kind: 'ARTICLE',
      tags: [],
      title: 'Article Title',
    };
  });

  it('should render the title', () => {
    // Given
    props.title = 'New Article Title';
    // When
    render(<ArticleCard {...props} />);
    // Then
    expect(screen.getByText(props.title)).toBeInTheDocument();
  });

  it('should render the banner as background', () => {
    // Given
    props.banner = {
      art: 'protocol://domain.tld/path/to/art',
      flavor: null,
      label: 'Line one. Line two',
      lqip: 'protocol://domain.tld/path/to/preview',
      title: 'Line one\nLine two',
    };
    // When
    const { container } = render(<ArticleCard {...props} />);
    // Then
    const element = container.firstChild;
    expect(element).toHaveStyle(`background-image: url("${props.banner.art}")`);
    expect(element).toHaveAccessibleName('Line one\nLine two');
  });
});
