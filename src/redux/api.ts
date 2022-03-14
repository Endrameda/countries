import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {CountryType} from "./types";

export const countriesApi = createApi({
    reducerPath: 'countries',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://restcountries.com/v3.1/'
    }),
    tagTypes: ['Countries'],
    endpoints: (build) => ({
        getAllCountries: build.query<CountryType[], void>({
            query: () => '/all',
        }),
    })
});

export const {useGetAllCountriesQuery} = countriesApi;
