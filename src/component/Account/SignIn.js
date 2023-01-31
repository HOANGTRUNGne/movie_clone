import React, {useState} from 'react';
import '../../style/Account.scss'
import '../../style/Header.scss'
import bg from '../../image/bg-login.jpeg'
import {UserAuth} from "../../context/AuthContext";
import {Link, NavLink} from "react-router-dom";
import {Button, Checkbox, Form, Input, Modal} from "antd";


const SignIn = () => {
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

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
        <>
            <Button type="primary" onClick={showModal}>
                Log in
            </Button>
            <Modal title="Log in" footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input placeholder="Username"/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <div style={{display: 'flex', justifyContent: 'center',}}>
                            <Button type="primary" block htmlType="submit" className="login-form-button"
                                    style={{maxWidth: '50%'}}>
                                Log in
                            </Button></div>

                    </Form.Item>

                    <Form.Item>
                        <div>
                            <p>Don’t have an LotsoBnb account?&nbsp;
                                <a href="/register">Register now</a>
                            </p>
                        </div>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default SignIn;

