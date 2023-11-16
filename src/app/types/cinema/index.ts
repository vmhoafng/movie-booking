import { IMovie } from "../movie";
import { IShowtime } from "../showtime";

export type ICinema = {
  id: string;
  name: string;
  address: string;
  district: string;
  city: string;
  phone_number: string;
  description: string;
  movies?: IMovie[];
  status?: string;
  rooms?: roomType[];
};

export type roomType = { totalSeats: number; name: string; seats: seatType[] };
export type seatType = { row: string; row_index: string; type_id: string };
export type IPostRoom = {
  totalSeats: number;
  name: string;
};
export type ICinemaList = ICinema[];

export type ICinemaShowtimeList = ICinema & { showtime: IShowtime[] };
export const initSeats = [
  {
    row: "C",
    type_id: "1",
    row_index: "5",
  },
  {
    row: "B",
    type_id: "1",
    row_index: "3",
  },
  {
    row: "D",
    type_id: "1",
    row_index: "1",
  },
  {
    row: "D",
    type_id: "1",
    row_index: "6",
  },
  {
    row: "H",
    type_id: "2",
    row_index: "9",
  },
  {
    row: "J",
    type_id: "1",
    row_index: "9",
  },
  {
    row: "I",
    type_id: "1",
    row_index: "14",
  },
  {
    row: "H",
    type_id: "1",
    row_index: "15",
  },
  {
    row: "D",
    type_id: "1",
    row_index: "4",
  },
  {
    row: "D",
    type_id: "1",
    row_index: "12",
  },
  {
    row: "A",
    type_id: "1",
    row_index: "1",
  },
  {
    row: "C",
    type_id: "1",
    row_index: "10",
  },
  {
    row: "H",
    type_id: "2",
    row_index: "7",
  },
  {
    row: "H",
    type_id: "1",
    row_index: "2",
  },
  {
    row: "B",
    type_id: "1",
    row_index: "13",
  },
  {
    row: "J",
    type_id: "1",
    row_index: "10",
  },
  {
    row: "I",
    type_id: "1",
    row_index: "3",
  },
  {
    row: "H",
    type_id: "1",
    row_index: "4",
  },
  {
    row: "C",
    type_id: "1",
    row_index: "7",
  },
  {
    row: "I",
    type_id: "1",
    row_index: "6",
  },
  {
    row: "B",
    type_id: "1",
    row_index: "4",
  },
  {
    row: "A",
    type_id: "1",
    row_index: "2",
  },
  {
    row: "I",
    type_id: "1",
    row_index: "9",
  },
  {
    row: "F",
    type_id: "1",
    row_index: "14",
  },
  {
    row: "B",
    type_id: "1",
    row_index: "11",
  },
  {
    row: "G",
    type_id: "1",
    row_index: "2",
  },
  {
    row: "H",
    type_id: "2",
    row_index: "8",
  },
  {
    row: "D",
    type_id: "1",
    row_index: "3",
  },
  {
    row: "B",
    type_id: "1",
    row_index: "7",
  },
  {
    row: "H",
    type_id: "1",
    row_index: "3",
  },
  {
    row: "F",
    type_id: "1",
    row_index: "5",
  },
  {
    row: "J",
    type_id: "1",
    row_index: "14",
  },
  {
    row: "C",
    type_id: "1",
    row_index: "4",
  },
  {
    row: "H",
    type_id: "1",
    row_index: "13",
  },
  {
    row: "J",
    type_id: "1",
    row_index: "13",
  },
  {
    row: "H",
    type_id: "2",
    row_index: "10",
  },
  {
    row: "A",
    type_id: "1",
    row_index: "15",
  },
  {
    row: "B",
    type_id: "1",
    row_index: "15",
  },
  {
    row: "I",
    type_id: "1",
    row_index: "11",
  },
  {
    row: "D",
    type_id: "1",
    row_index: "13",
  },
  {
    row: "H",
    type_id: "1",
    row_index: "1",
  },
  {
    row: "B",
    type_id: "1",
    row_index: "9",
  },
  {
    row: "C",
    type_id: "1",
    row_index: "11",
  },
  {
    row: "D",
    type_id: "1",
    row_index: "8",
  },
  {
    row: "I",
    type_id: "1",
    row_index: "4",
  },
  {
    row: "F",
    type_id: "1",
    row_index: "12",
  },
  {
    row: "B",
    type_id: "1",
    row_index: "8",
  },
  {
    row: "J",
    type_id: "1",
    row_index: "7",
  },
  {
    row: "A",
    type_id: "1",
    row_index: "11",
  },
  {
    row: "C",
    type_id: "1",
    row_index: "8",
  },
  {
    row: "E",
    type_id: "2",
    row_index: "8",
  },
  {
    row: "J",
    type_id: "1",
    row_index: "4",
  },
  {
    row: "I",
    type_id: "1",
    row_index: "13",
  },
  {
    row: "D",
    type_id: "1",
    row_index: "2",
  },
  {
    row: "E",
    type_id: "2",
    row_index: "7",
  },
  {
    row: "G",
    type_id: "1",
    row_index: "11",
  },
  {
    row: "D",
    type_id: "1",
    row_index: "7",
  },
  {
    row: "I",
    type_id: "1",
    row_index: "2",
  },
  {
    row: "G",
    type_id: "2",
    row_index: "10",
  },
  {
    row: "B",
    type_id: "1",
    row_index: "14",
  },
  {
    row: "B",
    type_id: "1",
    row_index: "6",
  },
  {
    row: "G",
    type_id: "1",
    row_index: "15",
  },
  {
    row: "A",
    type_id: "1",
    row_index: "14",
  },
  {
    row: "F",
    type_id: "2",
    row_index: "9",
  },
  {
    row: "C",
    type_id: "1",
    row_index: "3",
  },
  {
    row: "E",
    type_id: "1",
    row_index: "14",
  },
  {
    row: "D",
    type_id: "1",
    row_index: "10",
  },
  {
    row: "E",
    type_id: "1",
    row_index: "5",
  },
  {
    row: "I",
    type_id: "1",
    row_index: "15",
  },
  {
    row: "F",
    type_id: "1",
    row_index: "3",
  },
  {
    row: "F",
    type_id: "1",
    row_index: "4",
  },
  {
    row: "E",
    type_id: "1",
    row_index: "15",
  },
  {
    row: "A",
    type_id: "1",
    row_index: "6",
  },
  {
    row: "A",
    type_id: "1",
    row_index: "7",
  },
  {
    row: "J",
    type_id: "1",
    row_index: "3",
  },
  {
    row: "I",
    type_id: "1",
    row_index: "5",
  },
  {
    row: "J",
    type_id: "1",
    row_index: "1",
  },
  {
    row: "J",
    type_id: "1",
    row_index: "11",
  },
  {
    row: "I",
    type_id: "1",
    row_index: "12",
  },
  {
    row: "J",
    type_id: "1",
    row_index: "15",
  },
  {
    row: "G",
    type_id: "1",
    row_index: "1",
  },
  {
    row: "A",
    type_id: "1",
    row_index: "13",
  },
  {
    row: "B",
    type_id: "1",
    row_index: "12",
  },
  {
    row: "G",
    type_id: "1",
    row_index: "13",
  },
  {
    row: "E",
    type_id: "2",
    row_index: "10",
  },
  {
    row: "F",
    type_id: "1",
    row_index: "11",
  },
  {
    row: "B",
    type_id: "1",
    row_index: "1",
  },
  {
    row: "C",
    type_id: "1",
    row_index: "13",
  },
  {
    row: "D",
    type_id: "1",
    row_index: "14",
  },
  {
    row: "I",
    type_id: "1",
    row_index: "1",
  },
  {
    row: "F",
    type_id: "2",
    row_index: "7",
  },
  {
    row: "C",
    type_id: "1",
    row_index: "14",
  },
  {
    row: "H",
    type_id: "1",
    row_index: "5",
  },
  {
    row: "J",
    type_id: "1",
    row_index: "12",
  },
  {
    row: "E",
    type_id: "1",
    row_index: "2",
  },
  {
    row: "J",
    type_id: "1",
    row_index: "6",
  },
  {
    row: "A",
    type_id: "1",
    row_index: "5",
  },
  {
    row: "C",
    type_id: "1",
    row_index: "6",
  },
  {
    row: "D",
    type_id: "1",
    row_index: "15",
  },
  {
    row: "F",
    type_id: "1",
    row_index: "1",
  },
  {
    row: "F",
    type_id: "1",
    row_index: "2",
  },
  {
    row: "E",
    type_id: "1",
    row_index: "1",
  },
  {
    row: "J",
    type_id: "1",
    row_index: "5",
  },
  {
    row: "E",
    type_id: "1",
    row_index: "4",
  },
  {
    row: "I",
    type_id: "1",
    row_index: "8",
  },
  {
    row: "A",
    type_id: "1",
    row_index: "8",
  },
  {
    row: "A",
    type_id: "1",
    row_index: "12",
  },
  {
    row: "J",
    type_id: "1",
    row_index: "8",
  },
  {
    row: "G",
    type_id: "1",
    row_index: "12",
  },
  {
    row: "F",
    type_id: "2",
    row_index: "8",
  },
  {
    row: "G",
    type_id: "2",
    row_index: "6",
  },
  {
    row: "G",
    type_id: "1",
    row_index: "3",
  },
  {
    row: "C",
    type_id: "1",
    row_index: "15",
  },
  {
    row: "F",
    type_id: "1",
    row_index: "13",
  },
  {
    row: "C",
    type_id: "1",
    row_index: "1",
  },
  {
    row: "I",
    type_id: "1",
    row_index: "10",
  },
  {
    row: "E",
    type_id: "1",
    row_index: "13",
  },
  {
    row: "G",
    type_id: "2",
    row_index: "9",
  },
  {
    row: "H",
    type_id: "2",
    row_index: "6",
  },
  {
    row: "C",
    type_id: "1",
    row_index: "2",
  },
  {
    row: "A",
    type_id: "1",
    row_index: "3",
  },
  {
    row: "B",
    type_id: "1",
    row_index: "2",
  },
  {
    row: "E",
    type_id: "2",
    row_index: "9",
  },
  {
    row: "E",
    type_id: "1",
    row_index: "11",
  },
  {
    row: "C",
    type_id: "1",
    row_index: "12",
  },
  {
    row: "I",
    type_id: "1",
    row_index: "7",
  },
  {
    row: "G",
    type_id: "2",
    row_index: "7",
  },
  {
    row: "A",
    type_id: "1",
    row_index: "4",
  },
  {
    row: "F",
    type_id: "1",
    row_index: "15",
  },
  {
    row: "A",
    type_id: "1",
    row_index: "10",
  },
  {
    row: "F",
    type_id: "2",
    row_index: "6",
  },
  {
    row: "E",
    type_id: "2",
    row_index: "6",
  },
  {
    row: "A",
    type_id: "1",
    row_index: "9",
  },
  {
    row: "H",
    type_id: "1",
    row_index: "14",
  },
  {
    row: "C",
    type_id: "1",
    row_index: "9",
  },
  {
    row: "G",
    type_id: "1",
    row_index: "5",
  },
  {
    row: "E",
    type_id: "1",
    row_index: "3",
  },
  {
    row: "E",
    type_id: "1",
    row_index: "12",
  },
  {
    row: "B",
    type_id: "1",
    row_index: "5",
  },
  {
    row: "B",
    type_id: "1",
    row_index: "10",
  },
  {
    row: "F",
    type_id: "2",
    row_index: "10",
  },
  {
    row: "D",
    type_id: "1",
    row_index: "9",
  },
  {
    row: "H",
    type_id: "1",
    row_index: "11",
  },
  {
    row: "G",
    type_id: "1",
    row_index: "4",
  },
  {
    row: "G",
    type_id: "1",
    row_index: "14",
  },
  {
    row: "D",
    type_id: "1",
    row_index: "5",
  },
  {
    row: "J",
    type_id: "1",
    row_index: "2",
  },
  {
    row: "H",
    type_id: "1",
    row_index: "12",
  },
  {
    row: "D",
    type_id: "1",
    row_index: "11",
  },
  {
    row: "G",
    type_id: "2",
    row_index: "8",
  },
];
