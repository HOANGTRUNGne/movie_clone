import React, {useState} from 'react';
import {UserAuth} from "../../context/AuthContext";
import '../../style/Account.scss'
import '../../style/Header.scss'
import {Link} from "react-router-dom";
import bg from  '../../image/bg-register.jpeg'
import {Button, Form, Input} from "antd";


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

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={'container-sign'}>
            <div className={'bg'}><img src={bg} alt={''}/></div>
            <div className={'login-body'}>
                <div className="container-modal-form">
                    <div className={'left'}>
                        <div className="header">
                            <h1>Sign up</h1>
                        </div>
                        <div className={'form'}>
                            <Form
                                name="basic"

                                wrapperCol={{
                                    span: 24,
                                }}
                                style={{
                                    maxWidth: 600,
                                }}
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your username!',
                                        },
                                    ]}
                                >
                                    <Input placeholder="Username" />
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                >
                                    <Input.Password  placeholder="Password"/>
                                </Form.Item>

                                <Form.Item
                                    wrapperCol={{
                                        span: 24,
                                    }}
                                >
                                    <Button block type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>


                    </div>
                    <div className={'right'}>
                        <h1 style={{fontSize: '50px', textAlign: 'center', color: "#FF206EFF"}}>LotsoBnb</h1>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default SignUp;