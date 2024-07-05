import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLogin } from './util';


export default function PrivateRoutes({ children }) {
    let adminIsLogin = isLogin('mehdi')      //IT MUST BE (mehdi)

    return adminIsLogin ? children : <Navigate to='/login' />
}
