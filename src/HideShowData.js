import React, {Component} from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class ReplyForm extends Component {

    render() {
        return (
            <div>I'm Text</div>
        )
    }

    _log(methodName, args) {
        console.log(methodName, args);
    }

//COMPONENT LIFECYCLE
    componentWillUpdate() {
        this._log('componentWillUpdateReplyForm', arguments);
    }

    componentDidUpdate() {
        this._log('componentDidUpdateReplyForm', arguments);
    }

    componentWillMount() {
        this._log('componentWillMountReplyForm', arguments);
    }

    componentDidMount() {
        this._log('componentDidMountReplyForm', arguments);
    }

    componentWillUnmount() {
        this._log('componentWillUnmountReplyForm', arguments);
    }
}

class HideShowData extends Component {

    constructor() {
        super();
        this.state = {
            showReply: false
        }
    }

    //COMPONENT LIFECYCLE
    _log(methodName, args) {
        console.log(methodName, args);
    }

    componentWillUpdate() {
        this._log('componentWillUpdate', arguments);
    }

    componentDidUpdate() {
        this._log('componentDidUpdate', arguments);
    }

    componentWillMount() {
        this._log('componentWillMount', arguments);
    }

    componentDidMount() {
        this._log('componentDidMount', arguments);
    }

    componentWillUnmount() {
        this._log('componentWillUnmount', arguments);
    }

    onClick(e) {
        e.preventDefault();
        this.setState({showReply: !this.state.showReply})
    }

    render() {
        return (
            <div>
                <p>Some text</p>
                <a onClick={this.onClick.bind(this)} href='#'>Post to open/show text</a>
                {this.state.showReply && < ReplyForm/>}
            </div>
        )
    }
}

export default HideShowData