import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import { ArticleListItem } from '@/components/ArticleListItem/ArticleListItem';
import { Layout } from '@/components/Layout/Layout';
import { getArticles } from '@/tools/markdown/getArticles';
import { getMenu } from '@/tools/markdown/getMenu';
import type { Document, Menu } from '@/tools/markdown/types';

interface Props {
  articles: Document[];
  menu: Menu;
}

const ArticlesPage: NextPage<Props> = ({ articles, menu }) => (
  <Layout menu={menu} title="Articles">
    <Card>
      <List disablePadding>
        {articles.map(({ matter, route }, index) => (
          <ArticleListItem
            divider={index < articles.length - 1}
            key={route}
            matter={matter}
            href={route}
          />
        ))}
      </List>
    </Card>
  </Layout>
);

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    articles: await getArticles(),
    menu: getMenu(),
  },
});

export default ArticlesPage;
