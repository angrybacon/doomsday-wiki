import { type Components } from 'react-markdown';

import { Link } from '@/components/Link/Link';

export const RemarkLink: Components['a'] = ({ children, href, node }) => {
  if (!href) {
    console.error('Missing target for link', node);
    return <>{children}</>;
  }
  return (
    <Link external={href.startsWith('http')} href={href}>
      {children}
    </Link>
  );
};
