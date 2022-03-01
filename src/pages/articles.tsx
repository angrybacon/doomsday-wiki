import { GetStaticProps, NextPage } from 'next';
import NextLink from 'next/link';
import React from 'react';
import { mdiAccount, mdiCalendar } from '@mdi/js';
import Icon from '@mdi/react';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import type { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { ArticleKind } from '@/components/ArticleKind/ArticleKind';
import { ArticleTag } from '@/components/ArticleTag/ArticleTag';
import { Layout } from '@/components/Layout/Layout';
import { getArticles } from '@/tools/markdown/getArticles';
import { getMenu } from '@/tools/markdown/getMenu';
import type { Document, Menu } from '@/tools/markdown/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    kind: {
      marginLeft: theme.spacing(1),
    },
    secondary: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: theme.spacing(1),
    },
    tags: {
      margin: theme.spacing(-0.5),
      '& > *': {
        margin: theme.spacing(0.5),
      },
      [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(-0.25),
        '& > *': { margin: theme.spacing(0.25) },
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
                <ListItemText
                  classes={{ secondary: classes.secondary }}
                  primary={matter.title}
                  secondary={
                    <>
                      <div className={classes.tags}>
                        {matter.authors && (
                          <Chip
                            icon={<Icon path={mdiAccount} size={0.5} />}
                            label={matter.authors}
                            size="small"
                          />
                        )}
                        {matter.date && (
                          <Chip
                            icon={<Icon path={mdiCalendar} size={0.5} />}
                            label={matter.date}
                            size="small"
                          />
                        )}
                        {!!matter.tags?.length &&
                          matter.tags.map((tag) => (
                            <ArticleTag key={tag} tag={tag} />
                          ))}
                      </div>
                      <ArticleKind kind={matter.kind} />
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
