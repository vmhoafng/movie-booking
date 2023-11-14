export interface ISeatData {
   format: { id: Number; caption: String; version: String };
   id: String;
   movie: {
      id: String;
      name: String;
      director: String;
      cast: String;
      rating: Number;
   };
   room: {
      cinema: {
         id: String;
         name: String;
         address: String;
         district: String;
         city: String;
      };
      id: String;
      name: String;
      seats: ISeatType[];
      status: { id: Number; name: String };
      totalSeats: Number;
   };
   running_time: Number;
   start_date: String;
   start_time: String;
   status: Boolean;
}

export interface ISeatType {
   status: Boolean;
   row: String;
   type: {
      id: Number;
      name: String;
      price: Number;
   };
   seat_id: Number;
   is_reserved: Boolean;
   row_index: Number;
}

export interface ISeatRow {
   row: String;
   seats: ISeatType[];
}

export interface ITicketType {
   movie_name: String;
   format: String;
   cinema: String;
   showtime: String;
   ticket_price: Number;
   seat_id: ISeatType[];
   // Các thuộc tính khác của seat nếu có
}