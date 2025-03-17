import { type Components } from 'react-markdown';

import { Link as LinkComponent } from '@/components/Link/Link';

export const Link: Components['a'] = ({ children, href, node }) => {
  if (!href) {
    console.error('Missing target for link', node);
    return <>{children}</>;
  }
  return <LinkComponent href={href}>{children}</LinkComponent>;
};
