import { createApi } from '@reduxjs/toolkit/query/react';

const LISTINGS_URL = '/api/listings'; 

export const listingApiSlice = createApi({
  
  endpoints: (builder) => ({
    fetchListings: builder.query({
      query: () => `${LISTINGS_URL}`,
    }),
    createListing: builder.mutation({
      query: (data) => ({
        url: `${LISTINGS_URL}`,
        method: 'POST',
        body: data,
      }),
    }),
    updateListing: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `${LISTINGS_URL}/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),
    deleteListing: builder.mutation({
      query: (id) => ({
        url: `${LISTINGS_URL}/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useFetchListingsQuery,
  useCreateListingMutation,
  useUpdateListingMutation,
  useDeleteListingMutation,
} = listingApiSlice;

// Export the reducer to be added to the store
export default listingApiSlice.reducer;
