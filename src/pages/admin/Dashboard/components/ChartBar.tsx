import { IChartItem } from '@/app/redux/dashboard/dashboard.slice';
import React from 'react';

interface ChartBarProps {
    content: IChartItem['content'];
    title: IChartItem['title'];
    barValue: number;
}

const ChartBar = ({ content, title, barValue }: ChartBarProps) => {
    // console.log(title, content);
    let height = barValue * 40;

    return (
        <div className="w-8 flex justify-center" title={`${title}: ${content}`}>
            <div
                className={`block w-3 bg-highlight hover:cursor-pointer hover:opacity-80 transition-all duration-200`}
                style={{ height: `${height}px` }}
            ></div>
        </div>
    );
};

export default ChartBar;
