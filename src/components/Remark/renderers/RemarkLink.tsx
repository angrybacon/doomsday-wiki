import type { Components } from 'react-markdown';
import { Link } from '@/components/Link/Link';

export const RemarkLink: Components['a'] = ({ children, href }) => {
  if (!href) return <>{children}</>;
  return (
    <Link external={href.startsWith('http')} href={href}>
      {children}
    </Link>
  );
};
