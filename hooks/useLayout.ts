import { useContext } from 'react';

import { LayoutContext } from '@/contexts/Layout';

export const useLayout = () => useContext(LayoutContext);
