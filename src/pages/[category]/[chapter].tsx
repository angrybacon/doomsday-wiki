import { type ParsedUrlQuery } from 'querystring';
import { Card, CardContent } from '@mui/material';
import {
  type GetStaticPaths,
  type GetStaticPathsResult,
  type GetStaticProps,
  type NextPage,
} from 'next';

import { Banner } from '@/components/Banner/Banner';
import { Layout } from '@/components/Layout/Layout';
import { Markdown } from '@/components/Markdown/Markdown';
import { getChapterCards } from '@/tools/markdown/getChapterCards';
import { getChapter } from '@/tools/markdown/getMarkdown';
import { getMenu } from '@/tools/markdown/getMenu';
import {
  type Chapter,
  type ChapterCard,
  type MenuEntry,
} from '@/tools/markdown/types';

type Props = {
  chapter: Chapter;
  menu: MenuEntry[];
};

const Page: NextPage<Props> = ({ chapter, menu }) => (
  <Layout menu={menu} title={chapter.matter.title} withBackToTop withProgress>
    <Card>
      <Banner banner={chapter.banner} title={chapter.matter.title} />
      <CardContent>
        <Markdown markdown={chapter} />
      </CardContent>
    </Card>
  </Layout>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const chapters: ChapterCard[] = getChapterCards();
  const paths: GetStaticPathsResult['paths'] = chapters.map((chapter) => {
    const { category, slug } = chapter;
    return { params: { category, chapter: slug } };
  });
  return { fallback: false, paths };
};

type Query = ParsedUrlQuery & {
  category: string;
  chapter: string;
};

export const getStaticProps: GetStaticProps<Props, Query> = async ({
  params,
}) => {
  const { category, chapter } = params as Query;
  return {
    props: {
      chapter: await getChapter(category, chapter),
      menu: getMenu(),
    },
  };
};

export default Page;
