import React, {Component} from 'react';


const scaleNames = {
    a: 'First Value',
    b: 'Second Value'
};

class DataInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {data: ''};

    }

    //COMPONENT LIFECYCLE
    _log (methodName, args) {
        console.log(methodName, args);
    }
    componentWillUpdate () {
        this._log('componentWillUpdateINPUT', arguments);
    }
    componentDidUpdate() {
        this._log('componentDidUpdateINPUT', arguments);
    }
    componentWillMount () {
        this._log('componentWillMountINPUT', arguments);
    }
    componentDidMount() {
        this._log('componentDidMountINPUT', arguments);
    }
    componentWillUnmount() {
        this._log('componentWillUnmountINPUT', arguments);
    }


    handleChange(e) {
        console.log(this.state);
        this.setState({data: e.target.value});
        console.log(this.state);

    }

    render() {
        const numbers = this.state.data;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter {scaleNames[scale]}:</legend>
                <input
                    value={numbers}
                    onChange={this.handleChange}
                />
            </fieldset>
        );
    }
}

class Calculator extends Component {
    render() {
        return (
            <div>
                <DataInput scale="a"/>
                <DataInput scale="b"/>
            </div>
        );
    }
}

export default Calculator;
