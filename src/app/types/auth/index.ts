import { TFile } from "@/app/components/upload/FileUploader";

export type IPostLoginPayload = {
  email: string;
  password: string;
};

export type IPutAvatarPayload = {
  avatar: TFile;
};

export type ILoginWithToken = {
  token: string;
  exist: number;
};