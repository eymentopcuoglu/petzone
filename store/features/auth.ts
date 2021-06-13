import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RegistrationRequest, Status } from '../../types';
import api from '../../api';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        name: '',
        surname: '',
        phoneNumber: '',
        email: '',
        isVerified: false,
        createdAt: null,
        status: Status.IDLE,
        error: null
    },
    reducers: {}
});

export const registerUser = createAsyncThunk('auth/register', async (registrationRequest: RegistrationRequest) => {
    return await api.auth.register(registrationRequest.name, registrationRequest.surname, registrationRequest.email,
        registrationRequest.phoneNumber, registrationRequest.password);
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default authSlice.reducer