import {
  Card,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { type GetStaticProps, type NextPage } from 'next';
import NextLink from 'next/link';

import { ArticleMeta } from '@/components/ArticleMeta/ArticleMeta';
import { Layout } from '@/components/Layout/Layout';
import { getArticleCards } from '@/tools/markdown/getArticleCards';
import { MENU } from '@/tools/markdown/menu';
import { type ArticleCard } from '@/tools/markdown/types';

type Props = {
  articles: ArticleCard[];
  menu: typeof MENU;
};

const Page: NextPage<Props> = ({ articles, menu }) => (
  <Layout menu={menu} title="Articles" withBackToTop>
    <Card>
      <List disablePadding>
        {articles.map(({ date, href, matter }, index) => (
          <ListItemButton
            component={NextLink}
            divider={index < articles.length - 1}
            href={href}
            key={href}
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
    menu: MENU,
  },
});

export default Page;
