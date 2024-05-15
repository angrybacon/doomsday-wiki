import { Box } from '@mui/material';
import { type GetStaticProps, type NextPage } from 'next';

import { Layout } from '@/components/Layout/Layout';
import { getMenu } from '@/tools/markdown/getMenu';
import { type MenuEntry } from '@/tools/markdown/types';

type Props = {
  menu: MenuEntry[];
};

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
