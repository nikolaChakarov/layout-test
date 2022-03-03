import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Side.scss';

const Side = () => {
    const [click, setClick] = useState(false);

    return (
        <div className='sidebar' id='sidebar' style={{
            width: click ? '15rem' : ''
        }}>
            {/* <div className="custom-bttn" onClick={() => setClick(!click)}></div> */}
            <Link to="/form">back to the future...</Link>
        </div>
    )
}

export default Side
