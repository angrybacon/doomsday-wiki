import { Card, CardContent, Typography } from '@mui/material';
import { type GetStaticProps, type NextPage } from 'next';

import { Layout } from '@/components/Layout/Layout';
import { Markdown } from '@/components/Markdown/Markdown';
import { getDecklists } from '@/tools/decklists/getDecklists';
import { type Decklists } from '@/tools/decklists/types';
import { getPartial } from '@/tools/markdown/getMarkdown';
import { getMenu } from '@/tools/markdown/getMenu';
import { type MenuEntry, type Partial } from '@/tools/markdown/types';

type Props = {
  decklists: Decklists;
  license: Partial;
  menu: MenuEntry[];
};

const LicensePage: NextPage<Props> = ({ decklists, license, menu }) => (
  <Layout menu={menu} title="License">
    <Card>
      <CardContent>
        <Typography align="center" variant="h1">
          License
        </Typography>
        <Markdown decklists={decklists} markdown={license} />
      </CardContent>
    </Card>
  </Layout>
);

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    decklists: getDecklists(),
    license: await getPartial('license'),
    menu: getMenu(),
  },
});

export default LicensePage;
