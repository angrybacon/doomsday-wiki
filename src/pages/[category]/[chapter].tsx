import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Layout } from '@/components/Layout/Layout';
import { Remark } from '@/components/Remark/Remark';
import type { ExtraPageProps } from '@/interfaces/page.model';
import { getChapters } from '@/tools/markdown/getChapters';
import { getMarkdown } from '@/tools/markdown/getMarkdown';
import type { Document, Markdown } from '@/tools/markdown/types';

interface Props {
  markdown: Markdown;
}

const ChapterPage: NextPage<Props & ExtraPageProps> = ({ markdown, menu }) => (
  <Layout maxWidth="md" menu={menu} title={markdown?.data?.title}>
    <Card>
      <CardContent component={Remark} markdown={markdown} />
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
    markdown: getMarkdown(
      'chapters',
      params?.category ?? '',
      params?.chapter ?? ''
    ),
  },
});

export default ChapterPage;
