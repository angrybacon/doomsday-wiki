import Link from 'next/link';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { mdiFileDocument } from '@mdi/js';
import { Icon } from '@mdi/react';
import { Layout } from '@/components/Layout/Layout';
import { getArticles } from '@/tools/markdown/getArticles';
import type { Document, WithMenu } from '@/tools/markdown/types';

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
}

const ArticlesPage: NextPage<Props & WithMenu> = ({ articles, menu }) => {
  const classes = useStyles();
  return (
    <Layout maxWidth="md" menu={menu} title="Articles">
      <Card>
        <List dense disablePadding>
          {articles.map(({ data, route }, index) => (
            <Link href={route} key={route} passHref>
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
            </Link>
          ))}
        </List>
      </Card>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    articles: getArticles(),
  },
});

export default ArticlesPage;
