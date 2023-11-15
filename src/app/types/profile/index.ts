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
	oldPass: string;
	newPass: string;
};
export type IBillStatus = {
	name: 'Paid' | 'Cancel';
};
export type ITicket = {
	id: string;
	showtime: string;
	movie: string;
	cinema: string;
	room: string;
	seat: string;
	price: number;
	still_valid: boolean;
	cinema_address: string;
};
export type IBillState = {
	id: string;
	total: number;
	status: IBillStatus;
	user: {
		id: string;
		email: string;
		point: number;
		avatar: string;
		gender: string;
		full_name: string;
		date_of_birth: string;
		phone_number: string;
	};
	tickets: ITicket[];
	create_time: string;
	payment_at: string;
	changed_point: number;
};
export type IGetBills = {
	page?: number;
	size?: number;
	date?: string;
};
