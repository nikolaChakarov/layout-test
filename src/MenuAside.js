import React, { useState } from 'react';
import './MenuAside.css';

const MenuAside = () => {
    const [click, setClick] = useState(false);

    return (
        <div className="wrapper">
            <div className={`menu-aside ${click ? 'show-menu' : 'hide-menu'}`}>
                <div className="arrow" onClick={() => setClick(!click)}>
                    <p>*</p>
                </div>

                <ul>
                    <li>menu1</li>
                    <li>menu2</li>
                    <li>menu3</li>
                </ul>
            </div>

        </div>
    )
}

export default MenuAside
