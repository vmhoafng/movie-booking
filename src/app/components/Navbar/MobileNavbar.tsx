import Search from '../inputs/Search';
import { ForwardedRef, Fragment, useEffect } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import React, { useState } from 'react';
import { useRedux } from '@/app/hooks';
import { setOpen } from '@/app/redux/layout';
import useOutsideClick from '@/app/hooks/useOutsideClick';
import { createPortal } from 'react-dom';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PATHS } from '@/app/constants/path';
import useNavbar from './useNavbar';
import { resetAuth } from '@/app/redux/auth';
import { useSpring, animated, useTransition } from '@react-spring/web';

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}

function MobileNavbar() {
    const { dispatch, appSelector } = useRedux();
    const { userLoggedIn } = appSelector((state) => state.auth);
    const { isOpen } = appSelector((state) => state.layout);
    const { active } = useNavbar();

    const transitions = useTransition(isOpen, {
        from: { x: 220 },
        leave: { x: 220 },
        enter: { x: 0 },
        config: {
            duration: 240,
        },
    });

    const navigation = [
        { name: 'TRANG CHỦ', to: PATHS.HOME.IDENTITY },
        // { name: 'ĐẶT VÉ', to: '' },
        { name: 'PHIM', to: PATHS.MOVIES.IDENTITY },
        { name: 'RẠP/VÉ', to: PATHS.CINEMA.IDENTITY },
    ].concat(
        userLoggedIn
            ? [{ name: 'THÔNG TIN ', to: PATHS.PROFILE.IDENTITY }]
            : [{ name: 'ĐĂNG NHẬP', to: PATHS.AUTH.IDENTITY }],
    );

    const handleClose = () => {
        dispatch(setOpen(false));
    };
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate(`/${PATHS.HOME.IDENTITY}`);
        dispatch(resetAuth());
    };

    const ref = useOutsideClick(handleClose);

    return transitions((style, item) => (
        <div className="">
            {item &&
                createPortal(
                    <div className="fixed top-0 left-0 w-full h-screen bg-black/40 z-[100]">
                        <animated.div
                            className="w-[200px] h-full ml-auto  bg-bgPrimary"
                            ref={ref as ForwardedRef<HTMLDivElement>}
                            style={style}
                        >
                            <ul className="flex pt-[40px] text-center flex-col text-white text-[12px]  font-bold items-center gap-4">
                                {navigation.map((n) => {
                                    const regex = new RegExp(`^/${n.to}$`);

                                    return (
                                        <li
                                            key={n.name}
                                            className="py-[18px] w-full"
                                        >
                                            <Link
                                                className={classNames(
                                                    regex.test(active!)
                                                        ? ' text-highlight'
                                                        : 'text-gray-300  hover:text-white',
                                                    'block w-full',
                                                )}
                                                to={n.to}
                                            >
                                                {n.name}
                                            </Link>
                                        </li>
                                    );
                                })}
                                {userLoggedIn && (
                                    <li className="py-[18px] w-full">
                                        <Link
                                            to={''}
                                            className={classNames(
                                                'text-gray-300  hover:text-white',
                                                'block w-full',
                                            )}
                                            onClick={handleLogout}
                                        >
                                            ĐĂNG XUẤT
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </animated.div>
                    </div>,
                    document.body,
                )}
        </div>
    ));
}

export default MobileNavbar;
