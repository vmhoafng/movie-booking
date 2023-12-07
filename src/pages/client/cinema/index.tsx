import React, { useEffect } from 'react';
import Showtimes from './components/Showtimes';
import CinemaDetail from './components/CinemaDetail';
import { useRedux } from '@/app/hooks';
import { getCinemas } from '@/app/redux/cinema';

function Cinema() {
    const { appSelector, dispatch } = useRedux();
    const { cinemas, selected } = appSelector((state) => state.cinema);
    useEffect(() => {
        dispatch(getCinemas());
    }, [dispatch]);
    return (
        <div className=" text-white min-h-[1440px] flex flex-col pt-5 xl:flex-row xl:gap-10  ">
            <Showtimes />
            {selected !== -1 && <CinemaDetail cinema={cinemas[selected]} />}
        </div>
    );
}

export default Cinema;
