import { useRouter } from 'next/router';
import { forwardRef, useState } from 'react';
import type { ElementType, FunctionComponent } from 'react';
import { mdiChevronDown } from '@mdi/js';
import Icon from '@mdi/react';
import { ListItemButton, ListItemText } from '@mui/material';
import { Category } from '@/tools/markdown/constants/Category';
import type { Chapter, MenuEntry } from '@/tools/markdown/types';
import { SidebarEntryPages } from '@/components/Sidebar/SidebarEntryPages';

type Props = Omit<MenuEntry, 'category' | 'pages'> & {
  category?: Category;
  children?: never;
  component?: ElementType;
  href?: string;
  pages?: Chapter[];
};

export const SidebarEntry: FunctionComponent<Props> = forwardRef<
  HTMLDivElement,
  Props
>(({ category, pages = [], subtitle, title, ...rest }, ref) => {
  const { asPath, query } = useRouter();
  const currentCategory = `${query.category}`;
  const currentChapter = `${query.chapter}`;
  const hasPages = pages.length > 0;
  const [isOpen, setIsOpen] = useState(
    hasPages && category === currentCategory
  );

  /** Toggle the drawer in mobile viewport. */
  const onToggle = () => setIsOpen((previous) => !previous);

  return (
    <>
      <ListItemButton
        ref={ref}
        sx={{
          '> svg': {
            transition: (theme) => theme.transitions.create('transform'),
          },
        }}
        selected={rest.href === asPath}
        {...rest}
        {...(hasPages && { onClick: onToggle })}
      >
        <ListItemText
          primary={title}
          secondary={subtitle}
          secondaryTypographyProps={{ variant: 'caption' }}
        />
        {hasPages && (
          <Icon path={mdiChevronDown} rotate={isOpen ? -180 : 0} size={1} />
        )}
      </ListItemButton>
      {hasPages && (
        <SidebarEntryPages
          currentCategory={currentCategory}
          currentChapter={currentChapter}
          isOpen={isOpen}
          pages={pages}
        />
      )}
    </>
  );
});
