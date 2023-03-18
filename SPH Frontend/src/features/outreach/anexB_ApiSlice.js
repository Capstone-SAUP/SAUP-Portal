import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"

const anexAdapter = createEntityAdapter({
    sortComparer: (a, b) => (a.status === b.status) ? 0 : a.status ? "Completed" : -1
})

const initialState = anexAdapter.getInitialState()

export const anexB_ApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAnexB: builder.query({
            query: () => ({
                url: '/employee',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: responseData => {
                const loadedAnexB = responseData.map(anexb => {
                    anexb.id = anexb._id
                    return anexb
                });
                return anexAdapter.setAll(initialState, loadedAnexB)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'AnexB', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'AnexB', id }))
                    ]
                } else return [{ type: 'AnexB', id: 'LIST' }]
            }
        }),
        addNewAnexB: builder.mutation({
            query: initialAnexB => ({
                url: '/view-anex-B',
                method: 'POST',
                body: {
                    ...initialAnexB,
                }
            }),
            invalidatesTags: [
                { type: 'AnexB', id: "LIST" }
            ]
        }),
        updateAnexB: builder.mutation({
            query: initialAnexB => ({
                url: '/view-anex-B',
                method: 'PATCH',
                body: {
                    ...initialAnexB,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'AnexB', id: arg.id }
            ]
        }),
        deleteAnexB: builder.mutation({
            query: ({ id }) => ({
                url: `/view-anex-B`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'AnexB', id: arg.id }
            ]
        }),
    }),
})

export const {
    useGetAnexBQuery,
    useAddNewAnexBMutation,
    useUpdateAnexBMutation,
    useDeleteAnexBMutation,
} = anexB_ApiSlice

// returns the query result object
export const selectAnexBResult = anexB_ApiSlice.endpoints.getAnexB.select()

// creates memoized selector
const selectAnexBData = createSelector(
    selectAnexBResult,
    anexBResult => anexBResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllAnexB,
    selectById: selectAnexBById,
    selectIds: selectAnexBIds
    // Pass in a selector that returns the anexa slice of state
} = anexAdapter.getSelectors(state => selectAnexBData(state) ?? initialState)

//