import React from 'react';
import './Origin.scss';
import { v4 } from 'uuid';

const titles = ['asdfasfafsfasdfasfasfsdfsf', 'asdf0', 'fas', 'asdfasfasdfsf', 'asdf0', 'fas', 'sadffasf'];

const data = [
    {
        id: v4(),
        name: 'fasdfasdfasdf',
        age: 34,
        title: 'adsfasf',
        color: 'red',
        friends: 434,
        photos: 'adfasfasdffasdf',
        car: 'asd',
    },
    {
        id: v4(),
        name: '24',
        age: 34,
        title: 'adsfasf',
        color: 'red',
        friends: 434,
        photos: 'adfasfasasdfasfsdfsdfasasdfasdffasdf',
        car: 'asd',
    }, {
        id: v4(),
        name: '1',
        age: 34,
        title: 'adsfasf',
        color: 'red',
        friends: 434,
        photos: 'adfasfasdffasdf',
        car: 'asd',
    },
    {
        id: v4(),
        name: 'fasdfasdfasdf',
        age: 34,
        title: 'adsfasf',
        color: 'red',
        friends: 434,
        photos: 'adfasfasdffasdf',
        car: 'asd',
    },
    {
        id: v4(),
        name: 'fas',
        age: 34,
        title: 'adsfasf',
        color: 'red',
        friends: 434,
        photos: 'adfasfasdffasdf',
        car: 'asd',
    }, {
        id: v4(),
        name: 'h',
        age: 34,
        title: 'adsfasf',
        color: 'red',
        friends: 434,
        photos: 'adfasfasdffasdf',
        car: 'asd',
    },
    {
        id: v4(),
        name: 'er',
        age: 34,
        title: 'adsfasf',
        color: 'red',
        friends: 434,
        photos: 'adfasfasdffasdf',
        car: 'asd',
    },
    {
        id: v4(),
        name: 'sg',
        age: 34,
        title: 'adsfasf',
        color: 'red',
        friends: 434,
        photos: 'adfasfasdffasdf',
        car: 'asd',
    }
]

const Origin = () => {
    return (
        <div className='container-fluid' id='origin'>
            <h1>Title</h1>

            <div className="layout-body-wrapper">
                <div className="inner-wrapper">
                    {/* titles */}
                    <ul className='ul-titles'>
                        {titles.map((t, i) => {
                            return <li className='col' key={i}>{t}</li>
                        })}
                    </ul>

                    {/* elements */}
                    <ul className="ul-elements">
                        {data.map((el, i) => {
                            const keys = Object.keys(el).filter(el => el !== 'id');
                            return <li className='col' key={i}>
                                {keys.map((k, i) => {
                                    return <div className="col info" key={i}>{el[k]}</div>
                                })}
                            </li>
                        })}
                    </ul>
                </div>

            </div>

            <h2>Pagination</h2>
        </div>
    )
}

export default Origin
