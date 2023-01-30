import React, {useState} from 'react';
import {UserAuth} from "../../context/AuthContext";
import '../../style/Account.scss'
import '../../style/Header.scss'
import {Link} from "react-router-dom";
import bg from  '../../image/bg-register.jpeg'


const SignUp = (props) => {
    const {changeForm, modalSignUp} = props
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
        <div className={'container-sign'}>
            <div className={'bg'}><img src={bg} alt={''}/></div>
            <div className={'login-body'}>
                <div className="container-modal-form">
                    <div className={'left'}>
                        <div className="header">
                            <h2>Sign up</h2>
                        </div>
                        <form className="form" onSubmit={handleSignUp}>
                            <div spacing={2}>
                                <input id="standard-basic-login-user" label="Name" variant="standard"
                                           InputLabelProps={{className: 'textfield-label'}}
                                           InputProps={{className: 'textfield-input', autoComplete: 'off'}}
                                           className={'textfield-bg'}
                                           value={mail} onChange={(e) => setMail(e.target.value)}/>

                                <input id="standard-basic-login-password" label="Password" variant="standard" value={password}
                                           InputLabelProps={{className: 'textfield-label'}}
                                           InputProps={{className: 'textfield-input'}}
                                           className={'textfield-bg'} type={"password"}
                                           onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <p><a href="#">Forgot Password</a></p>
                            <div alignItems="center">
                                <button className={'btn-submit'}>SIGN UP NOW</button>
                            </div>
                            <p>Already have an LotsoBnb account?&nbsp;
                                <Link to={'/login'}  className={'sign-tab'}
                                      style={{fontSize: '16px', color: '#005dc6'}}>Sign in.
                                </Link>
                            </p>
                        </form>
                    </div>
                    <div className={'right'}>
                        <h1 style={{fontSize: '50px', textAlign: 'center', color: "#FF206EFF"}}>LotsoBnb</h1>
                        <div className={'card'}>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default SignUp;