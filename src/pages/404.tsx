import { GetStaticProps, NextPage } from 'next';
import { Box } from '@mui/material';
import { Layout } from '@/components/Layout/Layout';
import { getMenu } from '@/tools/markdown/getMenu';
import type { Menu } from '@/tools/markdown/types';

interface Props {
  menu: Menu;
}

const NotFoundPage: NextPage<Props> = ({ menu }) => (
  <Layout background="/404.jpg" menu={menu} title="404">
    <Box fontSize="10em" fontWeight="fontWeightLight" textAlign="center">
      404
    </Box>
  </Layout>
);

export const getStaticProps: GetStaticProps<Props> = () => ({
  props: {
    menu: getMenu(),
  },
});

export default NotFoundPage;
