export interface ISeatData {
   format: { id: number; caption: string; version: string };
   id: string;
   movie: {
      id: string;
      name: string;
      director: string;
      cast: string;
      rating: number;
   };
   room: {
      cinema: {
         id: string;
         name: string;
         address: string;
         district: string;
         city: string;
      };
      id: string;
      name: string;
      seats: ISeatType[];
      status: { id: number; name: string };
      totalSeats: number;
   };
   running_time: number;
   start_date: string;
   start_time: string;
   status: boolean;
}

export interface ISeatType {
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
}

export interface ISeatRow {
   row: string;
   seats: ISeatType[];
}

export interface ITicketType {
   showtime_id: string;
   movie_name: string;
   format: string;
   cinema: string;
   showtime: string;
   ticket_price: number;
}
