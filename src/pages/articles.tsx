import { GetStaticProps, NextPage } from 'next';
import NextLink from 'next/link';
import React from 'react';
import { mdiAccount, mdiCalendar, mdiFileDocument } from '@mdi/js';
import Icon from '@mdi/react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import type { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { ArticleChip } from '@/components/ArticleChip/ArticleChip';
import { Layout } from '@/components/Layout/Layout';
import { getArticles } from '@/tools/markdown/getArticles';
import { getMenu } from '@/tools/markdown/getMenu';
import type { Document, Menu } from '@/tools/markdown/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    secondary: {
      alignItems: 'center',
      display: 'flex',
      marginTop: 0.5,
      '& > :not(:first-child)': {
        marginLeft: theme.spacing(1),
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
          {articles.map(({ matter, route }, index) => (
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
                  primary={matter.title}
                  secondary={
                    <>
                      {matter.authors && (
                        <Box sx={{ alignItems: 'center', display: 'flex' }}>
                          <Icon path={mdiAccount} size={0.7} />
                          <Box sx={{ ml: 0.5 }}>{matter.authors}</Box>
                        </Box>
                      )}
                      {matter.date && (
                        <Box sx={{ alignItems: 'center', display: 'flex' }}>
                          <Icon path={mdiCalendar} size={0.7} />
                          <Box sx={{ ml: 0.5 }}>{matter.date}</Box>
                        </Box>
                      )}
                    </>
                  }
                  secondaryTypographyProps={{ variant: 'caption' }}
                />
                <ArticleChip kind={matter.kind} />
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
