import React, {useState, createContext, useEffect} from 'react';
import '../../style/Header.scss'
import SearchBtn from '../../image/search.svg'
import Avatar from '../../image/user.svg'
import Logout from '../../image/logout.svg'
import Help from '../../image/help.svg'
import Coin from '../../image/coin.svg'
import UserProfile from '../../image/userprofile.svg'
import {Link, NavLink} from "react-router-dom";
import {Button, Checkbox, Col, Form, Input, Layout, Menu, Modal, Row, Space} from 'antd';
import SignIn from "../Account/SignIn";

const {Header: Nav} = Layout;
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



    return (
        <Container.Provider value={toggle}>

            <Nav><Row className={'nav'}>
                <Col span={4}>
                    <h1 id={toggle ? 'heading' : ''}><NavLink to={'/'}>LotsoBnb</NavLink></h1>
                </Col>

                <Col span={16}>
                    <Menu mode={'horizontal'}
                          items={[
                              {label: 'Home', key: 'home',},
                              {label: 'Movie', key: 'movie',},
                              {label: (<NavLink to="/trending">Trending</NavLink>), key: 'trending',},
                              {label: (<NavLink to="/tvshow">Tv Show</NavLink>), key: 'tvshow',},
                              {label: (<NavLink to="/pricing">Pricing</NavLink>), key: 'pricing',},
                          ]}
                    />
                </Col>

                <Col span={4} style={{display: "flex", alignItems: "center"}}>
                  <SignIn />
                </Col>
            </Row>
            </Nav>
            {/*<nav className={toggle ? '' : 'navBarColor'}>*/}
            {/*    <div className={'nav-options'}>*/}
            {/*        <NavLink to={'/'}><h1 id={toggle ? 'heading' : ''}>LotsoBnb</h1></NavLink>*/}
            {/*        <NavLink to={'/'} style={({isActive}) => {*/}
            {/*            return {color: isActive ? '#fff' : '#EE9B00'}*/}
            {/*        }}>*/}
            {/*            <span id={toggle ? 'Movies' : 'MoviesLight'}>Movie</span>*/}
            {/*        </NavLink>*/}
            {/*        <NavLink to={'/tvshow'} style={({isActive}) => {*/}
            {/*            return {color: isActive ? '#fff' : '#EE9B00'}*/}
            {/*        }}>*/}
            {/*            <span id={toggle ? 'Movies' : 'MoviesLight'}>Tv Show</span>*/}
            {/*        </NavLink>*/}
            {/*        <NavLink to={'/trending'} style={({isActive}) => {*/}
            {/*            return {color: isActive ? '#fff' : '#EE9B00'}*/}
            {/*        }}>*/}
            {/*            <span id={toggle ? 'Movies' : 'MoviesLight'}>Trending</span>*/}
            {/*        </NavLink>*/}
            {/*        <NavLink to={'/pricing'} style={({isActive}) => {*/}
            {/*            return {color: isActive ? '#fff' : '#EE9B00'}*/}
            {/*        }}>*/}
            {/*            <span id={toggle ? 'Movies' : 'MoviesLight'}>Pricing</span>*/}
            {/*        </NavLink>*/}
            {/*    </div>*/}
            {/*    <div className={'primary-group'}>*/}
            {/*        /!*<input type={"text"} placeholder={'Search something...'}/>*!/*/}
            {/*        /!*<img src={SearchBtn} id={'search'} alt={'search'}/>*!/*/}
            {/*        <div className={'account'}>*/}
            {/*            /!*<img src={Avatar} alt={''} className={'avatar'} />*!/*/}


            {/*        </div>*/}
            {/*        <div id={'Color-switcher'} onClick={() => setToggle(!toggle)}>*/}
            {/*            <div id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}></div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</nav>*/}
            {/*</div>*/}
        </Container.Provider>
    );
};

export default Header;