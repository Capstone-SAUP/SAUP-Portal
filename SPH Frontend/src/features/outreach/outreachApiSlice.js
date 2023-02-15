import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"

const outreachAdapter = createEntityAdapter({
    sortComparer: (a, b) => (a.status === b.status) ? 0 : a.status ? "Completed" : -1
})

const initialState = outreachAdapter.getInitialState()

export const outreachApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getOutreach: builder.query({
            query: () => ({
                url: '/outreach',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: responseData => {
                const loadedOutreach = responseData.map(outreach => {
                    outreach.id = outreach._id
                    return outreach
                });
                return outreachAdapter.setAll(initialState, loadedOutreach)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Outreach', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Outreach', id }))
                    ]
                } else return [{ type: 'Outreach', id: 'LIST' }]
            }
        }),
        addNewOutreach: builder.mutation({
            query: initialOutreach => ({
                url: '/outreach',
                method: 'POST',
                body: {
                    ...initialOutreach,
                }
            }),
            invalidatesTags: [
                { type: 'Outreach', id: "LIST" }
            ]
        }),
        updateOutreach: builder.mutation({
            query: initialOutreach => ({
                url: '/outreach',
                method: 'PATCH',
                body: {
                    ...initialOutreach,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Outreach', id: arg.id }
            ]
        }),
        deleteOutreach: builder.mutation({
            query: ({ id }) => ({
                url: `/outreach`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Outreach', id: arg.id }
            ]
        }),
    }),
})

export const {
    useGetOutreachQuery,
    useAddNewOutreachMutation,
    useUpdateOutreachMutation,
    useDeleteOutreachMutation,
} = outreachApiSlice

// returns the query result object
export const selectOutreachResult = outreachApiSlice.endpoints.getOutreach.select()

// creates memoized selector
const selectOutreachData = createSelector(
    selectOutreachResult,
    outreachResult => outreachResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllOutreach,
    selectById: selectOutreachById,
    selectIds: selectOutreachIds
    // Pass in a selector that returns the outreach slice of state
} = outreachAdapter.getSelectors(state => selectOutreachData(state) ?? initialState)