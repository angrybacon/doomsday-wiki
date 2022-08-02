import { rest } from 'msw';
import { NAMED } from '@/mocks/constants/named';
import { SEARCH } from '@/mocks/constants/search';
import { SET } from '@/mocks/constants/set';
import type { ScryDataItem, ScryDataList } from '@/tools/scryfall/types';

export const handlers = [
  rest.get<ScryDataItem>(
    'https://api.scryfall.com/cards/named',
    (_request, response, context) => response(context.json(NAMED))
  ),
  rest.get<ScryDataList>(
    'https://api.scryfall.com/cards/search',
    (_request, response, context) => response(context.json(SEARCH))
  ),
  rest.get<ScryDataItem>(
    'https://api.scryfall.com/cards/:set/:number',
    (_request, response, context) => response(context.json(SET))
  ),
];
