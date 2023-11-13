export type IPutProfile = {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  phoneNumber: string;
  email: string;
};
export type ICheckPassword = {
  password: string;
};
export type IPutPassword = {
  oldPassword: string;
  newPassword: string;
};
