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
import { getChapters } from '@/tools/markdown/getChapters';
import { getMarkdown } from '@/tools/markdown/getMarkdown';
import { getMenu } from '@/tools/markdown/getMenu';
import type { Document, Markdown, Menu } from '@/tools/markdown/types';

interface Props {
  decklists: Decklists;
  markdown: Markdown;
  menu: Menu;
}

const ChapterPage: NextPage<Props> = ({ decklists, markdown, menu }) => {
  const { title } = markdown.matter;

  if (!title) return null;

  return (
    <Layout menu={menu} title={title} withBackToTop withProgress>
      <Card>
        <CardContent>
          <Typography align="center" variant="h1">
            {title}
          </Typography>
          <Remark decklists={decklists} markdown={markdown} />
        </CardContent>
      </Card>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const chapters: Document[] = getChapters();
  const paths: GetStaticPathsResult['paths'] = chapters.map(({ crumbs }) => {
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
}) => {
  const { category, chapter } = params as Query;
  return {
    props: {
      decklists: getDecklists(),
      markdown: await getMarkdown({
        path: join('chapters', category, chapter),
      }),
      menu: getMenu(),
    },
  };
};

export default ChapterPage;
