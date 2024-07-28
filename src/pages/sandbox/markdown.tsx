import { Card, CardContent } from '@mui/material';
import { type GetStaticProps, type NextPage } from 'next';

import { Layout } from '@/components/Layout/Layout';
import { Markdown } from '@/components/Markdown/Markdown';
import { getMarkdown } from '@/tools/markdown/getMarkdown';
import { MENU } from '@/tools/markdown/getMenu';
import { type MenuEntry, type Partial } from '@/tools/markdown/types';

type Props = {
  markdown: Partial;
  menu: MenuEntry[];
};

const Page: NextPage<Props> = ({ markdown, menu }) => (
  <Layout menu={menu} title="Sandbox">
    <Card>
      <CardContent>
        <Markdown markdown={markdown} />
      </CardContent>
    </Card>
  </Layout>
);

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    markdown: await getMarkdown('partials', 'sandbox'),
    menu: MENU,
  },
});

export default Page;
