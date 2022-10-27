import React, {FC, useState} from 'react';
import {Button, Form, Input} from "antd";
import { rules } from '../utils/rules';
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";

const LoginForm: FC = () => {

    const {login} = useActions()
    const {error, isLoading} = useTypedSelector(state => state.auth)

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const submit = () => {
        login(username, password)
    }

    return (
        <Form onFinish={submit}>
            {error && <div style={{color: 'red'}}>{error}</div>}
            <Form.Item
                label="Username"
                name="username"
                rules={[rules.required('Введите логин')]}
            >
                <Input value={username} onChange={(e) => setUsername(e.target.value)} />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[rules.required('Введите пароль')]}
            >
                <Input value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Item>
            <Form.Item>
                <Button type={'primary'} htmlType={'submit'} loading={isLoading}>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;