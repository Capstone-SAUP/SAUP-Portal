import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"

const anexAdapter = createEntityAdapter({
    sortComparer: (a, b) => (a.status === b.status) ? 0 : a.status ? "Completed" : -1
})

const initialState = anexAdapter.getInitialState()

export const anexA_ApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAnexA: builder.query({
            query: () => ({
                url: '/get-outreach',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: responseData => {
                const loadedAnexA = responseData.map(anexa => {
                    anexa.id = anexa._id
                    return anexa
                });
                return anexAdapter.setAll(initialState, loadedAnexA)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'AnexA', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'AnexA', id }))
                    ]
                } else return [{ type: 'AnexA', id: 'LIST' }]
            }
        }),
        addNewAnexA: builder.mutation({
            query: initialAnexA => ({
                url: '/view-anex-A',
                method: 'POST',
                body: {
                    ...initialAnexA,
                }
            }),
            invalidatesTags: [
                { type: 'AnexA', id: "LIST" }
            ]
        }),
        updateAnexA: builder.mutation({
            query: initialAnexA => ({
                url: '/view',
                method: 'PATCH',
                body: {
                    ...initialAnexA,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'AnexA', id: arg.id }
            ]
        }),
        deleteAnexA: builder.mutation({
            query: ({ id }) => ({
                url: `/view-anex-A`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'AnexA', id: arg.id }
            ]
        }),
    }),
})

export const {
    useGetAnexAQuery,
    useAddNewAnexAMutation,
    useUpdateAnexAMutation,
    useDeleteAnexAMutation,
} = anexA_ApiSlice

// returns the query result object
export const selectAnexAResult = anexA_ApiSlice.endpoints.getAnexA.select()

// creates memoized selector
const selectAnexAData = createSelector(
    selectAnexAResult,
    anexAResult => anexAResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllAnexA,
    selectById: selectAnexAById,
    selectIds: selectAnexAIds
    // Pass in a selector that returns the anexa slice of state
} = anexAdapter.getSelectors(state => selectAnexAData(state) ?? initialState)