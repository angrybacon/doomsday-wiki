import { Box } from '@mui/material';
import { type GetStaticProps, type NextPage } from 'next';

import { Layout } from '@/components/Layout/Layout';
import { MENU } from '@/tools/markdown/menu';

type Props = {
  menu: typeof MENU;
};

const Page: NextPage<Props> = ({ menu }) => (
  <Layout background="/404.jpg" menu={menu} title="404">
    <Box fontSize="10em" fontWeight="fontWeightLight" textAlign="center">
      404
    </Box>
  </Layout>
);

export const getStaticProps: GetStaticProps<Props> = () => ({
  props: {
    menu: MENU,
  },
});

export default Page;
