import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { join } from 'path';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Layout } from '@/components/Layout/Layout';
import { Remark } from '@/components/Remark/Remark';
import { getDecklists } from '@/tools/decklists/getDecklists';
import type { Decklists } from '@/tools/decklists/types';
import { getChapters } from '@/tools/markdown/getChapters';
import { getMarkdown, getPartials } from '@/tools/markdown/getMarkdown';
import { getMenu } from '@/tools/markdown/getMenu';
import type {
  Document,
  Markdown,
  Menu,
  Partials,
} from '@/tools/markdown/types';

interface Props {
  decklists: Decklists;
  markdown: Markdown;
  menu: Menu;
  partials: Partials;
}

const ChapterPage: NextPage<Props> = ({
  decklists,
  markdown,
  menu,
  partials,
}) => (
  <Layout maxWidth="md" menu={menu} title={markdown?.matter?.title}>
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

export const getStaticPaths: GetStaticPaths = async () => {
  const chapters: Document[] = getChapters();
  const paths = chapters.map(({ crumbs }) => {
    const [category, chapter] = crumbs;
    return { params: { category, chapter } };
  });
  return { fallback: false, paths };
};

interface Query extends ParsedUrlQuery {
  category: string;
  chapter: string;
}

export const getStaticProps: GetStaticProps<Props, Query> = async ({
  params,
}) => ({
  props: {
    decklists: getDecklists(),
    markdown: await getMarkdown(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      join('chapters', params!.category, params!.chapter)
    ),
    menu: getMenu(),
    partials: await getPartials(),
  },
});

export default ChapterPage;
