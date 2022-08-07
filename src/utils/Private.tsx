import React from 'react'
import { Navigate } from 'react-router-dom';
import { isAuth } from './Stogare';

type PrivateRouterProps = {
    children: JSX.Element
}

const Private = (props: PrivateRouterProps) => {
    if(localStorage.getItem('user')){
        const { user } = isAuth();
        if(!user?.role){
            return <Navigate to="/" />
        }
        return props.children
    }else{
        return <Navigate to="/admin" />
    }
}

export default Private