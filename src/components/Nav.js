import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <ul>
            <li>
                <Link to='origin'>Orign</Link>
            </li>
            <li>
                <Link to='layout-01'>Flex 01</Link>
            </li>
        </ul>
    )
}

export default Nav
