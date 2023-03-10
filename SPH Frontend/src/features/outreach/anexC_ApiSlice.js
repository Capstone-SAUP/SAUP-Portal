import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"

const anexAdapter = createEntityAdapter({
    sortComparer: (a, b) => (a.status === b.status) ? 0 : a.status ? "Completed" : -1
})

const initialState = anexAdapter.getInitialState()

export const anexC_ApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAnexC: builder.query({
            query: () => ({
                url: '/view-anex-C',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: responseData => {
                const loadedAnexC = responseData.map(anexc => {
                    anexc.id = anexc._id
                    return anexc
                });
                return anexAdapter.setAll(initialState, loadedAnexC)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'AnexC', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'AnexC', id }))
                    ]
                } else return [{ type: 'AnexC', id: 'LIST' }]
            }
        }),
        addNewAnexC: builder.mutation({
            query: initialAnexC => ({
                url: '/view-anex-C',
                method: 'POST',
                body: {
                    ...initialAnexC,
                }
            }),
            invalidatesTags: [
                { type: 'AnexC', id: "LIST" }
            ]
        }),
        updateAnexC: builder.mutation({
            query: initialAnexC => ({
                url: '/view-anex-C',
                method: 'PATCH',
                body: {
                    ...initialAnexC,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'AnexC', id: arg.id }
            ]
        }),
        deleteAnexC: builder.mutation({
            query: ({ id }) => ({
                url: `/view-anex-C`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'AnexC', id: arg.id }
            ]
        }),
    }),
})

export const {
    useGetAnexCQuery,
    useAddNewAnexCMutation,
    useUpdateAnexCMutation,
    useDeleteAnexCMutation,
} = anexC_ApiSlice

// returns the query result object
export const selectAnexCResult = anexC_ApiSlice.endpoints.getAnexC.select()

// creates memoized selector
const selectAnexCData = createSelector(
    selectAnexCResult,
    anexCResult => anexCResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllAnexC,
    selectById: selectAnexCById,
    selectIds: selectAnexCIds
    // Pass in a selector that returns the anexa slice of state
} = anexAdapter.getSelectors(state => selectAnexCData(state) ?? initialState)