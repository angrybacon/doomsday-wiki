import { ListItemButton, ListItemText } from '@mui/material';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  href: string;
  subtitle: string;
  title: string;
};

export const EntryAsLink = ({ href, subtitle, title }: Props) => {
  const { asPath } = useRouter();
  return (
    <ListItemButton component={NextLink} href={href} selected={href === asPath}>
      <ListItemText
        primary={title}
        secondary={subtitle}
        secondaryTypographyProps={{ variant: 'caption' }}
      />
    </ListItemButton>
  );
};
