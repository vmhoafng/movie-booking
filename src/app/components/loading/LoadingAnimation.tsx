import React from 'react';
import './style.css';

function LoadingAnimation() {
    return (
        <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-black/10 z-50">
            <span className="custom-loader"></span>
        </div>
    );
}

export default LoadingAnimation;
