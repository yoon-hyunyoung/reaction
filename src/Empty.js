import React, { useEffect, useState } from 'react';
import LoginContext from 'Utils'

export default function Empty({location}) {

    const login = React.useContext(LoginContext);

    React.useEffect(()=>{

        const token = window.localStorage.getItem("token")

        if (token!=null){
            login.setIsLogin(true);
        }else{
            login.setIsLogin(false);
        }

    },[location])

    return(
        <>
        </>
    )
} 