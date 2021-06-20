import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Status, Institution } from '../../types';
import api from '../../api';

interface InstitutionState {
    institutions: Institution[],
    status: Status,
    error: string | undefined
}

const initialState: InstitutionState = {
    institutions: [],
    status: Status.IDLE,
    error: undefined
};

export const getInstitutions = createAsyncThunk('institution/get', async () => {
    return (await api.institution.getAllInstitutions()) as Institution[];
});

export const institutionSlice = createSlice({
    name: 'institution',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getInstitutions.pending, (state, action) => {
            state.status = Status.LOADING;
        });
        builder.addCase(getInstitutions.fulfilled, (state, action) => {
            state.status = Status.SUCCEEDED;
            state.institutions = action.payload;
        });
        builder.addCase(getInstitutions.rejected, (state, action) => {
            state.status = Status.FAILED;
            state.error = action.error.message;
        });
    }
});

export default institutionSlice.reducer;