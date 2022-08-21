import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from "service/githubApi";

//https://api.github.com/search/repositories?q=user:ramersonrodrigues language:html

export const getReposUserGithub = createAsyncThunk(
    "users/user-github/repos",
    async (args, { rejectWithValue }) => {

        try {
            const { data, status } = await api.get(`/users/${args.user}/repos`)
            return data
        } catch (error) {
            rejectWithValue(error.response.data)
        }
    }
)

const SliceReposUserGithub = createSlice({
    name: 'userReposGithub',
    initialState: {
        loading: false,
        error: false,
        data: null,
        dataFilters: []
    },
    reducers: {
        setFiltersSlice(state, action) {
            let dataResponse = state.data
            if (action.payload.language != "all") {
                dataResponse = dataResponse.filter((item) => {
                    if (item.language == action.payload.language) return item
                })
            }

            if (action.payload.search != "") {
                dataResponse = dataResponse.filter((item) => {
                    if (item.full_name.includes(action.payload.search)) return item
                })
            }

            if (action.payload.disabled) {
                dataResponse = dataResponse.filter((item) => {
                    if (item.disabled) return item
                })
            }

            if (action.payload.archived) {
                dataResponse = dataResponse.filter((item) => {
                    if (item.archived) return item
                })
            }

            if (action.payload.order.name == "full_name") {
                if (action.payload.order.type == "asc") {
                    dataResponse = dataResponse?.sort((a, b) => {
                        if (a.full_name.toUpperCase() > b.full_name.toUpperCase()) return 1
                        if (a.full_name.toUpperCase() < b.full_name.toUpperCase()) return -1
                        return 0
                    })
                } else {
                    dataResponse = dataResponse?.sort((a, b) => {
                        if (a.full_name.toUpperCase() < b.full_name.toUpperCase()) return 1
                        if (a.full_name.toUpperCase() > b.full_name.toUpperCase()) return -1
                        return 0
                    })
                }
            }

            if (action.payload.order.name == "updated_at") {
                if (action.payload.order.type == "asc") {
                    dataResponse = dataResponse?.sort((a, b) => {
                        return new Date(a.updated_at) - new Date(b.updated_at)
                    })
                } else {
                    dataResponse = dataResponse?.sort((a, b) => {
                        return new Date(b.updated_at) - new Date(a.updated_at)
                    })
                }
            }

            if (action.payload.order.name == "created_at") {
                if (action.payload.order.type == "asc") {
                    dataResponse = dataResponse?.sort((a, b) => {
                        return new Date(a.created_at) - new Date(b.created_at)
                    })
                } else {
                    dataResponse = dataResponse?.sort((a, b) => {
                        return new Date(b.created_at) - new Date(a.created_at)
                    })
                }
            }

            state.dataFilters = dataResponse
        },
    },
    extraReducers: {
        [getReposUserGithub.pending]: (state, { payload }) => {
            state.loading = true
        },
        [getReposUserGithub.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.error = false
            state.data = payload
            state.dataFilters = payload
        },
        [getReposUserGithub.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = true
            state.data = []
            state.dataFilters = []
        },
    }
})

export const { setFiltersSlice } = SliceReposUserGithub.actions;
export default SliceReposUserGithub.reducer