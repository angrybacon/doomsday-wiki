import React from 'react';
import type { Components } from 'react-markdown';
import { Link } from '@/components/Link/Link';

export const RemarkLink: Components['a'] = ({ children, href }) =>
  href ? <Link href={href}>{children}</Link> : { children };
