import React, {useState, createContext} from 'react';
import '../../style/Header.scss'
import SearchBtn from '../../image/search.svg'
import { NavLink} from "react-router-dom";

export const Container = React.createContext()
const Navbar = () => {
    const [toggle, setToggle] = useState(true)
    return (
        <Container.Provider value={toggle}>
        <>
            <nav className={toggle ? '' : 'navBarColor'}>
                <div className={'nav-options'}>
                    <NavLink to={'/'}><h1 id={toggle ? 'heading' : ''}>LotsoBnb</h1></NavLink>
                    <NavLink to={'/'} style={({isActive}) => {
                        return {color: isActive ? '#fff' : '#EE9B00'}
                    }}>
                        <span id={toggle ? 'Movies' : 'MoviesLight'}>Movie</span>
                    </NavLink>
                    <NavLink to={'/tvshow'} style={({isActive}) => {
                        return {color: isActive ? '#fff' : '#EE9B00'}
                    }}>
                        <span id={toggle ? 'Movies' : 'MoviesLight'}>Tv Show</span>
                    </NavLink>
                    <NavLink to={'/trending'} style={({isActive}) => {
                        return {color: isActive ? '#fff' : '#EE9B00'}
                    }}>
                        <span id={toggle ? 'Movies' : 'MoviesLight'}>Trending</span>
                    </NavLink>
                    <NavLink to={'/pricing'} style={({isActive}) => {
                        return {color: isActive ? '#fff' : '#EE9B00'}
                    }}>
                        <span id={toggle ? 'Movies' : 'MoviesLight'}>Pricing</span>
                    </NavLink>
                </div>
                <div className={'input-group'}>
                    <input type={"text"} placeholder={'Search something...'}/>
                    <img src={SearchBtn} id={'search'} alt={'search'}/>
                    <div id={'Color-switcher'} onClick={() => setToggle(!toggle)}>
                        <div id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}></div>
                    </div>
                </div>
            </nav>
        </>
        </Container.Provider>
    );
};

export default Navbar;