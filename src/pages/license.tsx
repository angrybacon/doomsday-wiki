import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Layout } from '@/components/Layout/Layout';
import { Remark } from '@/components/Remark/Remark';
import { getDecklists } from '@/tools/decklists/getDecklists';
import type { Decklists } from '@/tools/decklists/types';
import { getMarkdown, getPartials } from '@/tools/markdown/getMarkdown';
import { getMenu } from '@/tools/markdown/getMenu';
import type { Markdown, Menu, Partials } from '@/tools/markdown/types';

interface Props {
  decklists: Decklists;
  markdown: Markdown;
  menu: Menu;
  partials: Partials;
}

const LicensePage: NextPage<Props> = ({
  decklists,
  markdown,
  menu,
  partials,
}) => (
  <Layout menu={menu} title="License">
    <Card>
      <CardContent
        component={Remark}
        decklists={decklists}
        markdown={markdown}
        partials={partials}
      />
    </Card>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    decklists: getDecklists(),
    markdown: await getMarkdown('partials/license'),
    menu: getMenu(),
    partials: await getPartials(),
  },
});

export default LicensePage;
