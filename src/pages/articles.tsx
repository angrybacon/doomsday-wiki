import { GetStaticProps, NextPage } from 'next';
import NextLink from 'next/link';
import React from 'react';
import { mdiFileDocument } from '@mdi/js';
import { Icon } from '@mdi/react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { createStyles, makeStyles } from '@mui/styles';
import { Layout } from '@/components/Layout/Layout';
import { getArticles } from '@/tools/markdown/getArticles';
import { getMenu } from '@/tools/markdown/getMenu';
import type { Document, Menu } from '@/tools/markdown/types';

const useStyles = makeStyles(() =>
  createStyles({
    secondary: {
      '& > :not(:first-child):before': {
        content: '" • "',
      },
    },
  })
);

interface Props {
  articles: Document[];
  menu: Menu;
}

const ArticlesPage: NextPage<Props> = ({ articles, menu }) => {
  const classes = useStyles();
  return (
    <Layout menu={menu} title="Articles">
      <Card>
        <List dense disablePadding>
          {articles.map(({ data, route }, index) => (
            <NextLink href={route} key={route} passHref>
              <ListItem
                button
                component="a"
                divider={index < articles.length - 1}
              >
                <ListItemAvatar>
                  <Avatar>
                    <Icon path={mdiFileDocument} size={1} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  classes={{ secondary: classes.secondary }}
                  primary={data?.title || route}
                  secondary={
                    <>
                      {data?.date && <span>{data.date}</span>}
                      {data?.authors && <span>{data.authors}</span>}
                    </>
                  }
                  secondaryTypographyProps={{ variant: 'caption' }}
                />
              </ListItem>
            </NextLink>
          ))}
        </List>
      </Card>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    articles: await getArticles(),
    menu: getMenu(),
  },
});

export default ArticlesPage;
