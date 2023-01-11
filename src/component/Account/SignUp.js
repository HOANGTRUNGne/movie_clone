import React, {useState} from 'react';
import {UserAuth} from "../../context/AuthContext";
import '../../style/Header.scss'
import TextField from '@mui/material/TextField';

const SignUp = (props) => {
    const {changeForm, modalAccount} = props
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const {user, signUp} = UserAuth()

    const handleSignUp = async (e) => {
        e.preventDefault()
        try {
            await signUp(mail, password)
        } catch (error) {
            console.log(error)
        }
        setMail('')
        setPassword('')
    }
    return (

        <div className={'modal'} onClick={() => modalAccount()}>
            <div className={'modal-content modal-account'} onClick={e => e.stopPropagation()}>
                {/*<span className="close" onClick={() => modalAccount()}>&times;</span>*/}

                <div className="container-modal-form">

                    <div className={'left'}>
                        <div className="header">
                            {/*<h1 id={'heading'}>LotsoBnb</h1>*/}
                            <h2>Sign up</h2>
                            <h4>Sign up to your account using email and password</h4>
                        </div>
                        <form className="form" onSubmit={handleSignUp}>
                            <TextField id="standard-basic" label="Name" variant="standard" value={mail}
                                       onChange={(e) => setMail(e.target.value)} />
                            <TextField id="standard-basic" label="Password" variant="standard" value={password}
                                       onChange={(e) => setPassword(e.target.value)} />
                            <p><a href="#">Forgot Password</a></p>
                            <button>SIGN UP NOW</button>
                            <p style={{color: 'rgba(0, 0, 0, 0.4)'}}>Already have an LotsoBnb account?
                                <a onClick={() => changeForm()} className={'sign-tab'}
                                   style={{fontSize: '16px', color: '#005dc6'}}>&nbsp;Sign In.</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;