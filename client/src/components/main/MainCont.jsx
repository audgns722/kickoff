import React from 'react'

import TodayHighlight from './TodayHighlight';
// import News from './News';
import MainVideo from './MainVideo';
import MainBoard from './MainBoard';

const MainCont = () => {


    return (
        <>
            <div id='MainCont'>
                <TodayHighlight />
                {/* <News /> */}
                <MainBoard />
                <MainVideo />
            </div >
        </>
    );
};

export default MainCont;
