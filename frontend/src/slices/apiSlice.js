import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
    credentials: 'include',
    prepareHeaders: (headers) => {
        headers.set('Content-Type', 'application/json');
        return headers;
    },
});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User', 'Listing'],
    endpoints: (builder) => ({}),
});