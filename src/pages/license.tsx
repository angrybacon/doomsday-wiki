import { Card, CardContent, Typography } from '@mui/material';
import { type GetStaticProps, type NextPage } from 'next';

import { Layout } from '@/components/Layout/Layout';
import { Markdown } from '@/components/Markdown/Markdown';
import { getMarkdown } from '@/tools/markdown/getMarkdown';
import { getMenu } from '@/tools/markdown/getMenu';
import { type MenuEntry, type Partial } from '@/tools/markdown/types';

type Props = {
  license: Partial;
  menu: MenuEntry[];
};

const Page: NextPage<Props> = ({ license, menu }) => (
  <Layout menu={menu} title="License">
    <Card>
      <CardContent>
        <Typography align="center" variant="h1">
          License
        </Typography>
        <Markdown markdown={license} />
      </CardContent>
    </Card>
  </Layout>
);

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    license: await getMarkdown('partials', 'license.md'),
    menu: getMenu(),
  },
});

export default Page;
