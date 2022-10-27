import React, {useEffect} from 'react';
import './App.css';
import AppRouter from "./component/AppRouter";
import Navbar from "./component/Navbar";
import {Layout} from "antd";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {useActions} from "./hooks/useActions";
import {IUser} from "./models/IUser";

const App = () => {
    const {setUser, setIsAuth} = useActions()
    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setUser({username: localStorage.getItem('username') || ''} as IUser)
            setIsAuth(true)
        }
    }, [])

    return (
        <Layout>
            <Navbar />
            <Layout.Content>
                <AppRouter />
            </Layout.Content>
        </Layout>
    )
};

export default App;
