import { GetStaticProps, NextPage } from 'next';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import { ArticleListItem } from '@/components/ArticleListItem/ArticleListItem';
import { Layout } from '@/components/Layout/Layout';
import { getArticleCards } from '@/tools/markdown/getArticleCards';
import { getMenu } from '@/tools/markdown/getMenu';
import type { ArticleCard, MenuEntry } from '@/tools/markdown/types';

interface Props {
  articles: ArticleCard[];
  menu: MenuEntry[];
}

const ArticlesPage: NextPage<Props> = ({ articles, menu }) => (
  <Layout menu={menu} title="Articles" withBackToTop>
    <Card>
      <List disablePadding>
        {articles.map(({ date, matter, route }, index) => (
          <ArticleListItem
            date={date}
            divider={index < articles.length - 1}
            href={route}
            key={route}
            matter={matter}
          />
        ))}
      </List>
    </Card>
  </Layout>
);

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    articles: await getArticleCards(),
    menu: getMenu(),
  },
});

export default ArticlesPage;
