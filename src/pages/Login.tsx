import React from 'react';
import {Card, Layout, Row} from "antd";
import LoginForm from "../component/LoginForm";

const Login = () => {
    return (
        <Layout>
            <Row justify={'center'} align={'middle'} style={{height: `calc(100vh - 64px)`}}>
                <Card>
                   <LoginForm />
                </Card>
            </Row>
        </Layout>
    );
};

export default Login;