import React, {PureComponent} from 'react';
//import $ from 'jquery';

import './index.css';

import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

registerServiceWorker();

class AddHotel extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            hotels: props.hotels,
            newHotel: {
                id: '',
                name: '',
                adress: '',
                phone: '',
                email: '',
                description: '',
                stars: ''
            }
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const {hotels, newHotel} = this.state;
        this.setState({
            hotels: [...hotels, newHotel],
        }, () => {
            for (let val in newHotel) {
                newHotel[val] = ''; // Clear the values...
            }
            this.setState({newHotel});
        });
    }

    handleInput(e, element) {
        const {newHotel} = this.state;
        newHotel[element] = e.target.value;
        this.setState({newHotel});
    }

    render() {
        const {newHotel } = this.state;
        const {id, name, adress, phone, email, description, stars} = newHotel;

        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="id">
                    <p>id</p>
                    <input type="text" ref={id} onChange={e => this.handleInput(e, 'id')} placeholder="id"/>
                </label>
                <label htmlFor="name">
                    <p>Hotel name</p>
                    <input type="text" value={name} onChange={e => this.handleInput(e, 'name')} placeholder="name" />
                </label>
                <label htmlFor="adress">
                    <p>adress</p>
                    <input type="text" value={adress} onChange={e => this.handleInput(e, 'adress')} placeholder="adress"/>
                </label>
                <label htmlFor="phone">
                    <p>phone</p>
                    <input type="text"  autoComplete='tel' value={phone} onChange={e => this.handleInput(e, 'phone')} placeholder="phone"/>
                </label>
                <label htmlFor="email">
                    <p>e-mail</p>
                    <input type="e-mail" autoComplete='email' value={email} onChange={e => this.handleInput(e, 'email')} placeholder="email"/>
                </label>
                <label htmlFor="description">
                    <p>description</p>
                    <input type="text" value={description} maxLength={500} onChange={e => this.handleInput(e, 'description')} placeholder="description"/>
                </label>
                <label htmlFor="stars">
                    <p>stars</p>
                    <input type="text"  value={stars} onChange={e => this.handleInput(e, 'stars')} placeholder="stars"/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default AddHotel;