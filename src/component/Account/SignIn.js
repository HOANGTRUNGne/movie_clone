import React, {useState} from 'react';
import '../../style/Account.scss'
import '../../style/Header.scss'
import bg from '../../image/bg-login.jpeg'
import {UserAuth} from "../../context/AuthContext";
import {Link} from "react-router-dom";


const SignIn = () => {
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignIn = async (e) => {
        e.preventDefault()
        // try {
        //     await signIn(mail, password)
        // } catch (error) {
        //     console.log(error)
        // }
        // setMail('')
        // setPassword('')
    }

    return (
        <div className={'container-sign'}>
            <div className={'bg'}><img src={bg} alt={''}/></div>
            <div className={'login-body'}>
                <div className="container-modal-form">
                    <div className={'left'}>
                        <div className="header">
                            <h2>Sign in</h2>
                        </div>
                        <form className="form" onSubmit={handleSignIn}>
                            <div spacing={2}>
                                <input id="standard-basic-signup-user" label="Name" variant="standard"
                                           InputLabelProps={{className: 'textfield-label'}}
                                           InputProps={{className: 'textfield-input', autoComplete: 'off'}}
                                           className={'textfield-bg'}
                                           value={mail} onChange={(e) => setMail(e.target.value)}/>

                                <input id="standard-basic-signup-password" label="Password" variant="standard"
                                           value={password}
                                           InputLabelProps={{className: 'textfield-label'}}
                                           InputProps={{className: 'textfield-input'}}
                                           className={'textfield-bg'} type={"password"}
                                           onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <p><a href="#">Forgot Password</a></p>
                            <div alignItems="center">
                                <button className={'btn-submit'}>SIGN IN NOW</button>
                            </div>
                            <p>Don’t have an LotsoBnb account?
                                <Link to={'/register'} className={'sign-tab'}
                                      style={{fontSize: '16px', color: '#005dc6'}}>&nbsp;Sign Up.</Link>
                            </p>
                        </form>
                    </div>
                    <div className={'right'}>
                        <h1 style={{fontSize: '50px', textAlign: 'center', color: "#FF206EFF"}}>LotsoBnb</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;

