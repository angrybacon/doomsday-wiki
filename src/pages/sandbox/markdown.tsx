import { Card, CardContent } from '@mui/material';
import { GetStaticProps, NextPage } from 'next';

import { Layout } from '@/components/Layout/Layout';
import { Markdown } from '@/components/Markdown/Markdown';
import { getDecklists } from '@/tools/decklists/getDecklists';
import { Decklists } from '@/tools/decklists/types';
import { getPartial } from '@/tools/markdown/getMarkdown';
import { getMenu } from '@/tools/markdown/getMenu';
import { type MenuEntry, type Partial } from '@/tools/markdown/types';

type Props = {
  decklists: Decklists;
  markdown: Partial;
  menu: MenuEntry[];
};

const Page: NextPage<Props> = ({ decklists, markdown, menu }) => (
  <Layout menu={menu} title="Sandbox">
    <Card>
      <CardContent>
        <Markdown decklists={decklists} markdown={markdown} />
      </CardContent>
    </Card>
  </Layout>
);

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    decklists: getDecklists(),
    markdown: await getPartial('sandbox'),
    menu: getMenu(),
  },
});

export default Page;
