import {
  Card,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { GetStaticProps, NextPage } from 'next';
import NextLink from 'next/link';

import { ArticleMeta } from '@/components/ArticleMeta/ArticleMeta';
import { Layout } from '@/components/Layout/Layout';
import { getArticleCards } from '@/tools/markdown/getArticleCards';
import { getMenu } from '@/tools/markdown/getMenu';
import { type ArticleCard, type MenuEntry } from '@/tools/markdown/types';

interface Props {
  articles: ArticleCard[];
  menu: MenuEntry[];
}

const ArticlesPage: NextPage<Props> = ({ articles, menu }) => (
  <Layout menu={menu} title="Articles" withBackToTop>
    <Card>
      <List disablePadding>
        {articles.map(({ date, matter, route }, index) => (
          <ListItemButton
            component={NextLink}
            divider={index < articles.length - 1}
            href={route}
            key={route}
          >
            <ListItemText
              disableTypography
              primary={<Typography>{matter.title}</Typography>}
              secondary={<ArticleMeta date={date} matter={matter} />}
            />
          </ListItemButton>
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
