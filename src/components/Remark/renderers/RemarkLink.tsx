import { type Components } from 'react-markdown';

import { Link } from '@/components/Link/Link';

export const RemarkLink: Components['a'] = ({ children, node, href }) => {
  if (!href) {
    console.error('Missing reference for link', node);
    return <>{children}</>;
  }
  return (
    <Link external={href.startsWith('http')} href={href}>
      {children}
    </Link>
  );
};
