import React, {Component} from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class BtnAction extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    //COMPONENT LIFECYCLE
    _log (methodName, args) {
        console.log(methodName, args);
    }
    componentWillUpdate () {
        this._log('componentWillUpdateBUTON', arguments);
    }
    componentDidUpdate() {
        this._log('componentDidUpdateBUTON', arguments);
    }
    componentWillMount () {
        this._log('componentWillMountBUTON', arguments);
    }
    componentDidMount() {
        this._log('componentDidMountBUTON', arguments);
    }
    componentWillUnmount() {
        this._log('componentWillUnmountBUTON', arguments);
    }


    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>;
        } else {
            button = <LoginButton onClick={this.handleLoginClick}/>;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        );
    }
}

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting/>;
    }
    return <GuestGreeting/>;
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

export default BtnAction;
