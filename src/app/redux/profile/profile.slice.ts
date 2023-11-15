import api from "@/app/services/api";
import {
  IBillState,
  ICheckPassword,
  IGetBills,
  IPutPassword,
  IPutProfile,
} from "@/app/types/profile";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserData } from "../auth";
import { Axios } from "@/app/utils/api";
import { ENDPOINTS } from "@/app/constants/endpoint";
import { IPutAvatarPayload } from "@/app/types/auth";
import { IUser } from "@/app/types/account";

type IProfileInitialState = {
  bills: IBillState[];
  user: UserData;
  isLoading: boolean;
};
const initialState: IProfileInitialState = {
  bills: [],
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
  isLoading: false,
};
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
export const updateProfile = createAsyncThunk<void, IPutProfile>(
  "@@auth/updateProfile",
  async (payload, thunkApi) => {
    const { data } = await api.profileService.putProfile(payload);
    return data;
  }
);
export const checkPassword = createAsyncThunk<void, ICheckPassword>(
  "@@auth/checkPassword",
  async (payload, thunkApi) => {
    const { data } = await api.profileService.checkPassword(payload);
    return data;
  }
);
export const updatePassword = createAsyncThunk<void, IPutPassword>(
  "@@auth/updatePassword",
  async (payload, thunkApi) => {
    const { data } = await api.profileService.putPassword(payload);
    return data;
  }
);
export const getBills = createAsyncThunk(
  "@@profile/getBills",
  async (payload: IGetBills) => {
    let res = await api.profileService.getBills(payload);
    return res.data;
  }
);

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    resetAuth: (state) => {
      state = { ...initialState };
    },
  },
  extraReducers(builder) {
    builder.addCase(updateImage.fulfilled, (state, action) => {
      //@ts-ignore
      state.user = { ...state.user, ...action.payload };
    });
    builder
      .addCase(updateProfile.fulfilled, (state, action) => {
        //@ts-ignore
        state.user = { ...action.payload.user, token: action.payload.token };
        state.isLoading = false;
      })
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
      });
    builder
      .addCase(updatePassword.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(updatePassword.pending, (state) => {
        state.isLoading = true;
      });
    builder
      .addCase(checkPassword.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(checkPassword.pending, (state) => {
        state.isLoading = true;
      });
    builder
      .addCase(getBills.fulfilled, (state, action) => {
        //@ts-ignore
        state.bills = [...action.payload.data];
        state.isLoading = false;
      })
      .addCase(getBills.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBills.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

//export user actions
export const { resetAuth } = profileSlice.actions;
//export user reducer
export default profileSlice;
