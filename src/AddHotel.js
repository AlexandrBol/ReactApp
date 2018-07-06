import React, {Component} from 'react';
//import $ from 'jquery';
import {Button, Form} from 'react-bootstrap';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

registerServiceWorker();

class AddHotel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //  hotels: props.hotels
            id: "123",
            name: "qwerty",
            adress: "qwerty",
            phone: "123456",
            email: "qwerty",
            description: "123",
            stars: "qwerty"
        }
        console.log(this.state);
    };

    procesData = () => {
        console.log(this.state.id)
        this.setState({
            id: this.state.id,
            name: this.state.name,
            adress: this.state.adress,
            phone: this.state.phone,
            email: this.state.email,
            description: this.state.description,
            stars: this.state.stars
        });
        console.log(this.state);
    };

    render() {
        return (
            <div>
                <Form>
                    <input
                        value={this.state.id}
                        onChange={value => this.setState({id: value})}
                        placeholder="id"
                    />

                    <input
                        value={this.state.name}
                        onChange={value => this.setState({name: value})}
                        placeholder="name"
                    />

                    <input
                        value={this.state.adress}
                        onChange={value => this.setState({adress: value})}
                        placeholder="adress"
                    />

                    <input
                        value={this.state.phone}
                        onChange={value => this.setState({phone: value})}
                        placeholder="phone"
                    />

                    <input
                        value={this.state.email}
                        onChange={value => this.setState({email: value})}
                        placeholder="email"
                    />

                    <input
                        value={this.state.description}
                        onChange={value => this.setState({description: value})}
                        placeholder="description"
                    />

                    <input
                        value={this.state.stars}
                        onChange={value => this.setState({stars: value})}
                        placeholder="stars"
                    />

                </Form>
                <Button onClick={() => this.procesData()}>
                    <p>btn</p>
                </Button>
            </div>
        );
    }
}

export default AddHotel;