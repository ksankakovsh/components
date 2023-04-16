import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_PATH } from 'utils/constants';

export const characterApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_PATH }),
  endpoints: (build) => ({
    getCharacters: build.query({
      query: () => `/results`,
    }),
  }),
});

export const { useGetCharactersQuery } = characterApi;
