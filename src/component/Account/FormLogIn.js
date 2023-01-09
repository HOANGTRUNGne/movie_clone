import React from 'react';
import ReactPlayer from "react-player";

const FormLogIn = (props) => {
    const {modalAccount} = props
    return (
        <>
            <div className={'modal'} onClick={() => modalAccount()}>
                <div className={'modal-content modal-account'} onClick={e => e.stopPropagation()}>
                    <span className="close" onClick={() => modalAccount()}>&times;</span>

                    <div className="account-form">
                        <div className="form-container">
                            <div className="header">
                                <h2>Welcome Back</h2>
                                <h4>Log in to your account using email and password</h4>
                            </div>
                            <div className="form">
                                <input type="text" className="form-field " placeholder="Name"/>
                                <input type="password" className="form-field " placeholder="Password"/>
                                <p><a href="#">Forgot Password</a></p>
                                <button>LOGIN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormLogIn;