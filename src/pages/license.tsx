import { GetStaticProps, NextPage } from 'next';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Layout } from '@/components/Layout/Layout';
import { Remark } from '@/components/Remark/Remark';
import { getDecklists } from '@/tools/decklists/getDecklists';
import type { Decklists } from '@/tools/decklists/types';
import { getMarkdownPartial } from '@/tools/markdown/getMarkdown';
import { getMenu } from '@/tools/markdown/getMenu';
import type { Markdown, Menu } from '@/tools/markdown/types';

interface Props {
  decklists: Decklists;
  markdown: Markdown;
  menu: Menu;
}

const LicensePage: NextPage<Props> = ({ decklists, markdown, menu }) => (
  <Layout menu={menu} title="License">
    <Card>
      <CardContent>
        <Typography align="center" variant="h1">
          License
        </Typography>
        <Remark decklists={decklists} markdown={markdown} />
      </CardContent>
    </Card>
  </Layout>
);

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    decklists: getDecklists(),
    markdown: await getMarkdownPartial({ path: 'license' }),
    menu: getMenu(),
  },
});

export default LicensePage;
