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

    handleChange(e) {
        console.log(this.state);
        this.setState({data: e.target.value});
        console.log(this.state);
        let a = this.state;
        let b =  this.state;
        let c = a+b;
        console.log(c);
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
