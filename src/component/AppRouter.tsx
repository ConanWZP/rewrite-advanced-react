import React, {useState} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes, RouteNames} from "../routes";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter = () => {
    const {isAuth} = useTypedSelector(state => state.auth)
    return (
        <div>
            {isAuth ?
                <Routes>
                    {privateRoutes.map(route =>
                        <Route key={route.path} path={route.path} element={<route.element/>} />
                    )}
                    <Route path={'/*'} element={<Navigate to={RouteNames.EVENT}/>}/>
                </Routes>
                :
                <Routes>
                    {publicRoutes.map(route =>
                        <Route key={route.path} path={route.path} element={<route.element/>} />
                    )}
                    <Route path={'/*'} element={<Navigate to={RouteNames.LOGIN}/>}/>
                </Routes>
            }
        </div>
    );
};

export default AppRouter;