import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {UserAuth} from "../../context/AuthContext";


const LogIn = (props) => {
    const {changeForm} = props
    return (
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
                    <a onClick={() => changeForm()} className={'sign-up'}
                       style={{fontSize: '16px', color: '#005dc6'}}>&nbsp;Sign up now.</a>
                </p>
            </div>
        </div>
    )
}
const SignUp = (props) => {
    const {changeForm} = props
    const [mail, setMail] = useState()
    const [password, setPassword] = useState()
    const {user, signUp} = UserAuth()

    const handleSignUp =  (e) => {
        e.preventDefault()
        // try {
        //     await signUp(mail, password)
        // } catch (error) {
        //     console.log(error)
        // }
        console.log('done')

    }

    return (
        <div className="form-container">
            <div className="header">
                <h2>Sign up</h2>
                <h4>Sign up to your account using email and password</h4>
            </div>
            <div className="form" onSubmit={handleSignUp}>
                <input type="text" className="form-field " placeholder="Name"
                       onChange={(e) => setMail(e.target.value)}
                />
                <input type="password" className="form-field " placeholder="Password"
                       onChange={(e) => setPassword( e.target.value)}
                />
                <p><a href="#">Forgot Password</a></p>
                <button>SIGN UP NOW</button>
                <p style={{color: 'rgba(0, 0, 0, 0.4)'}}>Already have an LotsoBnb account?
                    <a onClick={() => changeForm()} className={'sign-up'}
                       style={{fontSize: '16px', color: '#005dc6'}}>&nbsp;Sign In.</a>
                </p>
            </div>
        </div>
    )
}
const FormLog = (props) => {
    const {modalAccount} = props
    const [formSign, setFormSign] = useState(false)
    const changeForm = () => {
        setFormSign(!formSign)
    }
    return (
        <>
            <div className={'modal'} onClick={() => modalAccount()}>
                <div className={'modal-content modal-account'} onClick={e => e.stopPropagation()}>
                    <span className="close" onClick={() => modalAccount()}>&times;</span>

                    <div className="account-form">
                        {
                            formSign ?
                                <SignUp {...{changeForm}}/>
                                :
                                <LogIn {...{changeForm}} />
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormLog;