import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_PATH } from 'utils/constants';
import { ResponseCharacters } from 'utils/interfaces';

export const characterApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_PATH }),
  endpoints: (build) => ({
    getCharacters: build.query<ResponseCharacters, string>({
      query: () => ({ url: `character` }),
    }),
  }),
});

export const { useGetCharactersQuery } = characterApi;
