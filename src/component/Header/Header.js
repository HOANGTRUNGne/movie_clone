import React, {useState, createContext, useEffect} from 'react';
import '../../style/Header.scss'
import SearchBtn from '../../image/search.svg'
import Avatar from '../../image/user.svg'
import Logout from '../../image/logout.svg'
import Help from '../../image/help.svg'
import Coin from '../../image/coin.svg'
import UserProfile from '../../image/userprofile.svg'
import { NavLink} from "react-router-dom";
import FormLog from "../Account/FormLog";

const AccountArr = [
    {
        icon: UserProfile,
        title: 'View profile',
        to: '',
    },
    {
        icon: Coin,
        title: 'Purchases and memberships',
        to: '',
    },
    {
        icon: Help,
        title: 'Help',
        to: '',
    },
    {
        icon: Logout,
        title: 'Log Out',
        to: '',
    },

]
export const Container = React.createContext()
const Header = () => {
    const [toggle, setToggle] = useState(true)
    const [switchAccount, setSwitchAccount] = useState(false)

    const modalAccount = () =>{
        setSwitchAccount(!switchAccount)
    }
    useEffect(() => {
        const close = (e) => {
            if (e.keyCode === 27 && !switchAccount) {
                setSwitchAccount(switchAccount)
            }
        }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    }, [])

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
                    <div className={'primary-group'}>
                        <input type={"text"} placeholder={'Search something...'}/>
                        <img src={SearchBtn} id={'search'} alt={'search'}/>
                        <div className={'account'}>
                            {/*<img src={Avatar} alt={''} className={'avatar'} />*/}
                            <div className={'button'} onClick={() => modalAccount()}>
                                Sign in
                                { switchAccount && <FormLog {...{modalAccount}} />}
                            </div>
                        </div>
                        <div id={'Color-switcher'} onClick={() => setToggle(!toggle)}>
                            <div id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}></div>
                        </div>
                    </div>
                </nav>
            </>
        </Container.Provider>
    );
};

export default Header;