import type { Components } from 'react-markdown';

import { RemarkError } from '@korumite/kiwi';

import { Link as LinkComponent } from '~/components/Link/Link';

export const Link: Components['a'] = ({ children, href, node }) => {
  if (!children) throw new RemarkError('Missing link text', { node });
  if (!href) throw new RemarkError('Missing reference for link', { node });
  return <LinkComponent href={href}>{children}</LinkComponent>;
};
