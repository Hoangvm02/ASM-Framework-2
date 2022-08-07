import React from 'react'
import { Navigate } from 'react-router-dom';

type PrivateRouterProps = {
    children: JSX.Element
}

const CheckAdmin = (props: PrivateRouterProps) => {
    if(localStorage.getItem('user')){
            return <Navigate to="/" />
    }
    return props.children
}

export default CheckAdmin