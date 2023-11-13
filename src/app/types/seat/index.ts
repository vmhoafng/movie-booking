export type ISeat = {
	status: boolean;
	row: string;
	type: {
		id: number;
		name: string;
		price: number;
	};
	seat_id: number;
	is_reserved: boolean;
	row_index: number;
};
