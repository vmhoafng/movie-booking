import { IMovie } from '@/app/types/movie';

export type DeleteShowtimeFormProps = {
	onCloseModal?: () => void;
	eventInfo: any;
	movie: IMovie & { start: string };
};
