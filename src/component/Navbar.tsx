import {Layout, Menu, Row} from "antd";
import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../routes";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const Navbar: FC = () => {
    const {isAuth, user} = useTypedSelector(state => state.auth)
    const navigate = useNavigate()
    const {logout} = useActions()
    const items1 = [{label: 'Выйти', key: 'item-1', onClick: () => logout() }]
    const items2 = [{label: 'Логин', key: 'item-2', onClick: () => navigate(RouteNames.LOGIN) }]
    return (
        <Layout.Header>
            <Row justify={'end'}>
                {isAuth ?
                    <>
                        <div style={{color: 'white', marginRight: 10}}>{user.username}</div>
                        <Menu theme={'dark'} mode="horizontal" selectable={false} items={items1} overflowedIndicator
                        />
                    </>
                    :
                    <>
                        <Menu theme={'dark'} mode={'horizontal'} selectable={false} overflowedIndicator items={items2} />
                    </>
                }
            </Row>
        </Layout.Header>
    );
};

export default Navbar;