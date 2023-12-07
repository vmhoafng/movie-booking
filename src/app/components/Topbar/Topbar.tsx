import React from 'react';
import SearchTopbar from '../inputs/SearchTopbar';
import UserProfile from '../UserProfile';
import { Bars3BottomLeftIcon, Bars3Icon } from '@heroicons/react/24/solid';
import { useRedux } from '@/app/hooks';
import { setOpen } from '@/app/redux/layout';

function Topbar() {
    const { appSelector, dispatch } = useRedux();
    const { isOpen } = appSelector((state) => state.layout);
    return (
        <div className="h-20 sticky bg-[#04123c] top-0 left-0 right-0 z-50 border-b border-white/10">
            {/* {isOpen ? (
            <button
               onClick={() => dispatch(setOpen(!isOpen))}
               className=" flex items-center absolute top-0 bottom-0 left-5"
            >
               <div className="border rounded">
                  <Bars3Icon className="h-6 w-6" />
               </div>
            </button>
         ) : (
            <button
               onClick={() => dispatch(setOpen(!isOpen))}
               className=" flex items-center absolute top-0 bottom-0 left-5"
            >
               <div className="border rounded">
                  <Bars3BottomLeftIcon className="h-6 w-6" />
               </div>
            </button>
         )} */}
            <div className='w-[1200px] flex h-full justify-end'>
                <UserProfile />
            </div>
        </div>
    );
}

export default Topbar;
