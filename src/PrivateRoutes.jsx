import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isLogin } from './util';


export default function PrivateRoutes() {
    let adminIsLogin = isLogin('mehdi')      //IT MUST BE (mehdi)

    return adminIsLogin ? <Outlet /> : <Navigate to='/login' />
}
