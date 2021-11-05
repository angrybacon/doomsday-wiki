import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Layout } from '@/components/Layout/Layout';
import { Remark } from '@/components/Remark/Remark';
import type { ExtraPageProps } from '@/interfaces/page.model';
import { getMarkdown } from '@/tools/markdown/getMarkdown';
import type { Markdown } from '@/tools/markdown/types';

interface Props {
  markdown: Markdown;
}

const LicensePage: NextPage<Props & ExtraPageProps> = ({
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
  props: { markdown: await getMarkdown('partials/license') },
});

export default LicensePage;
