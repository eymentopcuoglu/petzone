import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LoginRequest, LoginResponse, RegistrationRequest, RegistrationResponse, Status, User } from '../../types';
import api from '../../api';

interface AuthState {
    isAuthenticated: boolean,
    user: User,
    token: string,
    status: Status,
    error: string | undefined
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: {
        id: -1,
        name: '',
        surname: '',
        phoneNumber: '',
        email: '',
        isVerified: false,
        createdAt: null,
    },
    token: '',
    status: Status.IDLE,
    error: undefined
};

export const login = createAsyncThunk('auth/login', async (loginRequest: LoginRequest) => {
    return (await api.auth.login(loginRequest.email, loginRequest.password)) as LoginResponse;
});

export const register = createAsyncThunk('auth/register', async (registrationRequest: RegistrationRequest) => {
    return (await api.auth.register(registrationRequest.name, registrationRequest.surname, registrationRequest.email,
        registrationRequest.phoneNumber, registrationRequest.password)) as RegistrationResponse;
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(login.pending, (state, action) => {
            state.status = Status.LOADING;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            console.log(action.payload);
            state.status = Status.SUCCEEDED;
            state.user = action.payload.user;
            state.isAuthenticated = true;
            state.token = action.payload.jwt;

        });
        builder.addCase(login.rejected, (state, action) => {
            state.status = Status.FAILED;
            state.error = action.error.message;
        });
        builder.addCase(register.pending, (state, action) => {
            state.status = Status.LOADING;
        });
        builder.addCase(register.fulfilled, (state, action) => {
            state.status = Status.SUCCEEDED;
        });
        builder.addCase(register.rejected, (state, action) => {
            state.status = Status.FAILED;
            state.error = action.error.message;
        });
    }
});

export default authSlice.reducer;