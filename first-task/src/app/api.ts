import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from 'utils/constants';
import { Character, ResponseCharacters } from 'utils/interfaces';

export const characterApi = createApi({
  reducerPath: 'characterApi',
  keepUnusedDataFor: 0,
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getCharacters: build.query<ResponseCharacters, string>({
      query: (characterName) => ({
        url: '/character',
        params: {
          name: characterName,
        },
      }),
    }),
    getCharacter: build.query<Character, number>({
      query: (id) => ({ url: `character/${id}` }),
    }),
  }),
});

export const { useGetCharactersQuery } = characterApi;
