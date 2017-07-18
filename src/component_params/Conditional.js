/**
 * Created by wangxuquan on 2017/7/18.
 */
import React from 'react'
class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
        console.log(button);
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} p={this.props.routeParams.p}/>
                {button}
            </div>
        );
    }
}

function UserGreeting(props) {
    return (
        <div>
            <h1>Welcome back!--{props.p}</h1>
        </div>

    );
}

function GuestGreeting(props) {
    return (
        <div>
            <h1>Please sign up.--{props.p}</h1>
        </div>

    );
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    const p = props.p;
    if (isLoggedIn) {
        return <UserGreeting p={p}/>;
    }
    return <GuestGreeting  p={p}/>;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

export default LoginControl;
