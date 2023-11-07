import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Axios } from "../../utils/api";
import authUtils from "../../utils/auth";
import { SignalIcon } from "@heroicons/react/20/solid";
import {
  IPostLoginPayload,
  IPutAvatarPayload,
  IPutProfilePayload,
} from "@/app/types/auth";
import { ENDPOINTS } from "@/app/constants/endpoint";
import { IPostBill } from "@/app/types/payment";
import api from "@/app/services/api";
import { IUser } from "@/app/types/account";
// import { access } from 'fs';

type UserData = {
  avatar: string;
  token: string;
  email: string;
  gender: string;
  point: number;
  verify: boolean | undefined;
  role: string;
  full_name: string;
  date_of_birth: string;
  phone_number: string;
};

// initial state
type IUserInitialState = {
  isAuthenticated: boolean;
  userLoggedIn: boolean;
  isLoading: boolean;
  user: UserData;
};
const initialState: IUserInitialState = {
  isAuthenticated: false,
  userLoggedIn: false,
  isLoading: false,
  user: {
    avatar: "",
    date_of_birth: "",
    email: "",
    full_name: "",
    gender: "",
    phone_number: "",
    point: 0,
    role: "",
    token: "",
    verify: undefined,
  },
};

export const login = createAsyncThunk(
  "@@auth/login",
  async (payload: IPostLoginPayload, thunkApi) => {
    const { data } = await Axios.axiosPost("auth/authenticate", payload, {
      signal: thunkApi.signal,
    });
    return data;
  }
);

export const getCurrentUser = createAsyncThunk(
  "@@auth/getCurrentUser",
  async (_, thunkApi) => {
    const { data } = await Axios.axiosGetWithToken(ENDPOINTS.PROFILE.DATA, {
      signal: thunkApi.signal,
    });
    return data;
  }
);

export const updateImage = createAsyncThunk<IUser, IPutAvatarPayload>(
  "@@auth/updateImage",
  async (payload, thunkApi) => {
    const { data } = await Axios.axiosPutWithFile(
      ENDPOINTS.PROFILE.UPDATE_AVATAR,
      payload
    );
    return data;
  }
);
export const updateProfile = createAsyncThunk(
  "@@auth/updateProfile",
  async (payload: IPutProfilePayload, thunkApi) => {
    const { data } = await api.profileService.putProfile(payload);
    return data;
  }
);
//create user slice
export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuth: (state) => {
      state = { ...initialState };
    },

    selectSeat: (state, action) => {},
  },
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = { ...action.payload.user, token: action.payload.token };
        state.isAuthenticated = true;
        state.userLoggedIn = true;
        state.isLoading = false;
        authUtils.setSessionToken(action.payload.token);
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      });
    builder
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = { ...action.payload };
        state.isAuthenticated = true;
        state.userLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true;
      });

    builder.addCase(updateImage.fulfilled, (state, action) => {
      //@ts-ignore
      state.user = { ...state.user, ...action.payload };
    });
    builder
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
        state.isLoading = false;
      })
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
      });
  },
});

//export user actions
export const { resetAuth } = userSlice.actions;
//export user reducer
export default userSlice.reducer;
