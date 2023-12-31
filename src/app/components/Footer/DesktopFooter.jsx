import React from 'react';

function DesktopFooter() {
    return (
        <div className="absolute right-0 left-0 top-full bg-bgPrimaryBar  px-[15px] md:px-0  py-[30px] md:gap-[20px] shadow-[0px_-30px_120px_0px_rgba(0,0,0,0.3)]">
            <div className="container items-center flex flex-col gap-5 w-full mx-auto">
                <div className=" flex  w-full justify-between border-b-2  py-[10px] border-[#314C81]">
                    <div className="flex w-[100px] h-[50px] md:w-[130px]  justify-center items-center shrink-0 rounded-3xl ">
                        <img
                            className=" "
                            src={'./assets/images/Logo.png'}
                            alt=""
                        />
                    </div>
                    <div className="  flex justify-end items-center gap-[15px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="42"
                            height="41"
                            viewBox="0 0 42 41"
                            fill="none"
                            className="hover:bg-highlight rounded-full"
                        >
                            <circle cx="21" cy="20.5" r="20" stroke="#314C81" />
                            <path
                                d="M25.73 13H23.4855C22.4933 13 21.5418 13.3941 20.8402 14.0957C20.1387 14.7972 19.7445 15.7488 19.7445 16.7409V18.9855H17.5V21.9782H19.7445V27.9636H22.7373V21.9782H24.9818L25.73 18.9855H22.7373V16.7409C22.7373 16.5425 22.8161 16.3522 22.9564 16.2119C23.0967 16.0716 23.287 15.9927 23.4855 15.9927H25.73V13Z"
                                fill="white"
                            />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="41"
                            height="41"
                            viewBox="0 0 41 41"
                            fill="none"
                            className="hover:bg-highlight rounded-full"
                        >
                            <circle
                                cx="20.5"
                                cy="20.5"
                                r="19.5"
                                stroke="#314C81"
                            />
                            <path
                                d="M28.5 13.5073C27.8036 13.9986 27.0324 14.3743 26.2164 14.62C25.7784 14.1164 25.1962 13.7595 24.5488 13.5974C23.9013 13.4354 23.2196 13.4762 22.5961 13.7142C21.9725 13.9522 21.437 14.376 21.0622 14.9282C20.6873 15.4804 20.4911 16.1345 20.5 16.8019V17.5291C19.2219 17.5623 17.9555 17.2788 16.8135 16.704C15.6714 16.1292 14.6893 15.2809 13.9545 14.2346C13.9545 14.2346 11.0455 20.78 17.5909 23.6891C16.0931 24.7058 14.3088 25.2156 12.5 25.1437C19.0455 28.78 27.0455 25.1437 27.0455 16.78C27.0448 16.5775 27.0253 16.3754 26.9873 16.1764C27.7295 15.4444 28.2533 14.5202 28.5 13.5073Z"
                                fill="white"
                            />
                        </svg>
                        <div className="border rounded-full border-[#314C81] p-[9px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                fill="none"
                            >
                                <path
                                    d="M14.6665 2.16675H6.33317C4.03198 2.16675 2.1665 4.03223 2.1665 6.33341V14.6667C2.1665 16.9679 4.03198 18.8334 6.33317 18.8334H14.6665C16.9677 18.8334 18.8332 16.9679 18.8332 14.6667V6.33341C18.8332 4.03223 16.9677 2.16675 14.6665 2.16675Z"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M13.8333 9.97501C13.9361 10.6685 13.8176 11.3769 13.4947 11.9992C13.1718 12.6215 12.6609 13.1262 12.0346 13.4414C11.4083 13.7566 10.6986 13.8663 10.0064 13.755C9.31419 13.6436 8.67472 13.3167 8.17895 12.821C7.68318 12.3252 7.35636 11.6857 7.24497 10.9935C7.13359 10.3013 7.24331 9.59159 7.55852 8.96532C7.87374 8.33905 8.37841 7.82812 9.00074 7.50521C9.62307 7.18229 10.3314 7.06383 11.0249 7.16667C11.7324 7.27158 12.3873 7.60123 12.893 8.10693C13.3987 8.61263 13.7283 9.26757 13.8333 9.97501Z"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M15.0835 5.91675H15.0935"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="text-white flex flex-col-reverse lg:flex-row w-full justify-center lg:justify-between items-center gap-6 lg:gap-0">
                    <div className="md:text-base  ">
                        <p className="text-white text-[10px]   lg:text-[15px]">
                            Copyright © 2023.All Rights Reserved By{' '}
                            <span className="text-highlight">CNPM-Team</span>
                        </p>
                    </div>
                    <div className=" w-full  lg:text-[15px] lg:w-fit text-xs flex items-center text-white/60 lg:justify-end lg:gap-[40px] justify-evenly  ">
                        <a href="/">About</a>
                        <a href="/">Terms of us</a>
                        <a href="/">Contact</a>
                        <a href="/">Feedback</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DesktopFooter;
