/**
 * Created by RX-Wang on 2016/12/20.
 */
import React, { Component } from 'react';
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Wang',
    lastName: 'Ruoxi'
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

class User extends Component{
    render(){ return (element)}
}

export default User;