import { TFile } from "@/app/components/upload/FileUploader";

export type IPostLoginPayload = {
  email: string;
  password: string;
};

export type IPutAvatarPayload = {
  avatar: TFile;
};
export type IPutProfilePayload = {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  phoneNumber: string;
  email: string;
};
