import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav';
import './App.scss';

import MainFlex01 from './components/FlexScroll01/MainFlex01';
import Origin from './components/FlexScroll01/Origin';

const App = () => {
    return (
        <div className="main-app">
            <h1>Marine Mammals</h1>

            <Nav />

            <Routes>
                <Route path='origin' element={<Origin />} />
                <Route path='layout-01' element={<MainFlex01 />} />

            </Routes>
        </div>
    )
}

export default App;