import React from 'react';
import './MainFlex01.scss';

import Side from './Side';
import LayoutFlex01 from './LayoutFlex01';

const MainFlex01 = () => {
    return (
        <div className='container-fluid' id='main-flex-01'>
            <Side />
            <LayoutFlex01 />
        </div>
    )
}

export default MainFlex01
