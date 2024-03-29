import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
    EditProfileRequest,
    LoginRequest,
    LoginResponse,
    RegistrationRequest,
    RegistrationResponse,
    Status,
    User
} from '../../types';
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

export const editUser = createAsyncThunk('auth/editUser', async (editProfileRequest: EditProfileRequest) => {
    return (await api.user.updateUser(editProfileRequest.userId, editProfileRequest.name, editProfileRequest.surname,
        editProfileRequest.email, editProfileRequest.phoneNumber, editProfileRequest.token)) as User;
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginFailed: state => {
            state.status = Status.IDLE
        }
    },
    extraReducers: builder => {
        builder.addCase(login.pending, (state, action) => {
            state.status = Status.LOADING;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            if (action.payload.user) {
                state.status = Status.SUCCEEDED;
                state.user = action.payload.user;
                state.isAuthenticated = true;
                state.token = action.payload.jwt;
            } else {
                state.status = Status.FAILED;
            }
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
        builder.addCase(editUser.pending, (state, action) => {
            state.status = Status.LOADING;
        });
        builder.addCase(editUser.fulfilled, (state, action) => {
            state.status = Status.IDLE;
            state.user.name = action.payload.name;
            state.user.surname = action.payload.surname;
            state.user.phoneNumber = action.payload.phoneNumber;
        });
        builder.addCase(editUser.rejected, (state, action) => {
            state.status = Status.FAILED;
            state.error = action.error.message;
        });
    }
});

export default authSlice.reducer;
export const { loginFailed } = authSlice.actions;