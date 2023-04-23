import { GetStaticProps, NextPage } from 'next';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Layout } from '@/components/Layout/Layout';
import { Remark } from '@/components/Remark/Remark';
import { getDecklists } from '@/tools/decklists/getDecklists';
import type { Decklists } from '@/tools/decklists/types';
import { getPartial } from '@/tools/markdown/getMarkdown';
import { getMenu } from '@/tools/markdown/getMenu';
import type { MenuEntry, Partial } from '@/tools/markdown/types';

interface Props {
  decklists: Decklists;
  license: Partial;
  menu: MenuEntry[];
}

const LicensePage: NextPage<Props> = ({ decklists, license, menu }) => (
  <Layout menu={menu} title="License">
    <Card>
      <CardContent>
        <Typography align="center" variant="h1">
          License
        </Typography>
        <Remark decklists={decklists} markdown={license} />
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
