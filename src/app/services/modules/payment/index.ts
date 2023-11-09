import { ENDPOINTS } from '@/app/constants/endpoint';
import { IPostBill } from '@/app/types/payment';
import { Axios } from '@/app/utils/api';

export const paymetService = {
	postBill: async (payload: IPostBill) => {
		return await Axios.axiosPostWithToken(ENDPOINTS.PAYMENT.POST_BILL, payload);
	},
};
