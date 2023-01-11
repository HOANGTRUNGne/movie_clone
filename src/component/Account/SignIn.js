import React, {useState} from 'react';
import {UserAuth} from "../../context/AuthContext";


const SignIn = (props) => {
    const {modalAccount, changeForm} = props

    return (
        <>
            <div className={'modal'} onClick={() => modalAccount()}>
                <div className={'modal-content modal-account'} onClick={e => e.stopPropagation()}>
                    <span className="close" onClick={() => modalAccount()}>&times;</span>

                    <div className="account-form">
                        <div className="form-container">
                            <div className="header">
                                <h2>Log in</h2>
                                <h4>Log in to your account using email and password</h4>
                            </div>
                            <div className="form">
                                <input type="text" className="form-field " placeholder="Name"/>
                                <input type="password" className="form-field " placeholder="Password"/>
                                <p><a href="#">Forgot Password</a></p>
                                <button>LOGIN</button>
                                <p style={{color: 'rgba(0, 0, 0, 0.4)'}}>Don’t have an LotsoBnb account?
                                    <a onClick={() => changeForm()} className={'sign-tab'}
                                       style={{fontSize: '16px', color: '#005dc6'}}>&nbsp;Sign up now.</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;