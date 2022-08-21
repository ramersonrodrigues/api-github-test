import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from "service/githubApi";


export const getUserGithub = createAsyncThunk(
    "users/user-github",
    async (args, { rejectWithValue }) => {
        try {
            const { data, status } = await api.get(`users/${args}`)
            return data
        } catch (error) {
            return rejectWithValue(error.response)
        }
    }
)

const SliceUserGithub = createSlice({
    name: 'userGithub',
    initialState: {
        loading: false,
        error: false,
        data: null

    },
    reducers: {},
    extraReducers: {
        [getUserGithub.pending]: (state, { payload }) => {
            state.loading = true
        },
        [getUserGithub.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.error = false
            state.data = payload
        },
        [getUserGithub.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = true
            state.data = payload
        }
    }
})

export const { reset } = SliceUserGithub.actions;
export default SliceUserGithub.reducer