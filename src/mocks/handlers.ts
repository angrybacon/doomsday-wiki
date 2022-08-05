import { rest } from 'msw';
import type { MockedRequest, RestHandler } from 'msw';
import { NAMED } from '@/mocks/constants/named';
import { SEARCH } from '@/mocks/constants/search';
import { SET } from '@/mocks/constants/set';
import type { ScryDataItem, ScryDataList } from '@/tools/scryfall/types';

export const handlers: RestHandler<MockedRequest>[] = [
  rest.get<ScryDataItem>(
    'https://api.scryfall.com/cards/named',
    (request, response, context) => {
      const card: ScryDataItem = { ...NAMED };
      const name = request.url.searchParams.get('exact');
      const set = request.url.searchParams.get('set');
      card.name = name || card.name;
      card.set = set || card.set;
      return response(context.json(card));
    }
  ),

  rest.get<ScryDataList>(
    'https://api.scryfall.com/cards/search',
    (request, response, context) => {
      const query = request.url.searchParams.get('q');
      const card: ScryDataList = { ...SEARCH };
      if (query) {
        const [, name] = query.match(/!"(.+)"/) || [];
        card.data[0].name = name || query;
      }
      return response(context.json(card));
    }
  ),

  rest.get<ScryDataItem>(
    'https://api.scryfall.com/cards/:set/:number',
    (request, response, context) => {
      const set = `${request.params.set}`;
      const number = `${request.params.number}`;
      const name = `${set.toUpperCase()}#${number}`;
      const card: ScryDataItem = { ...SET, name };
      return response(context.json(card));
    }
  ),
];
