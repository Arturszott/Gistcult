import React, { Component } from 'react';

const LoginButton = (props) => {
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${props.clientID}&scope=gist`;

    return (
        <a href={authUrl} className='btn btn-default'>
            Login via Github
        </a>
    )
};

export default LoginButton;