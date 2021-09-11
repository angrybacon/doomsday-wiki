import React from 'react';
import { render, screen } from '@testing-library/react';
import { Article, Props } from '@/components/Article/Article';

describe(Article.name, () => {
  let props: Props;

  beforeEach(() => {
    props = { route: '/path/to/article' };
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
});
