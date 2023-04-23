import type {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  NextPage,
} from 'next';
import { join } from 'path';
import { ParsedUrlQuery } from 'querystring';
import { Card, CardContent, Typography } from '@mui/material';
import { Layout } from '@/components/Layout/Layout';
import { Remark } from '@/components/Remark/Remark';
import { getDecklists } from '@/tools/decklists/getDecklists';
import type { Decklists } from '@/tools/decklists/types';
import { getChapterCards } from '@/tools/markdown/getChapterCards';
import { getChapter } from '@/tools/markdown/getMarkdown';
import { getMenu } from '@/tools/markdown/getMenu';
import type { Chapter, ChapterCard, MenuEntry } from '@/tools/markdown/types';

interface Props {
  chapter: Chapter;
  decklists: Decklists;
  menu: MenuEntry[];
}

const ChapterPage: NextPage<Props> = ({ chapter, decklists, menu }) => (
  <Layout menu={menu} title={chapter.matter.title} withBackToTop withProgress>
    <Card>
      <CardContent>
        <Typography align="center" variant="h1">
          {chapter.matter.title}
        </Typography>
      </CardContent>
      <CardContent>
        <Remark decklists={decklists} markdown={chapter} />
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

interface Query extends ParsedUrlQuery {
  category: string;
  chapter: string;
}

export const getStaticProps: GetStaticProps<Props, Query> = async ({
  params,
}) => {
  const { category, chapter } = params as Query;
  return {
    props: {
      chapter: await getChapter(join(category, chapter)),
      decklists: getDecklists(),
      menu: getMenu(),
    },
  };
};

export default ChapterPage;
