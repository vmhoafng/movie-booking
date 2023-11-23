import { IMovie } from '@/app/types/movie';

export type CreateShowtimeFormProps = {
	onCloseModal?: () => void;
	movie?: IMovie;
};
