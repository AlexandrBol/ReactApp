import React from 'react';

import Post from './HotelPost'

import './index.css';

import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
registerServiceWorker();

export default class HotelsList extends React.Component {

    render() {
        const PostHotel = this.props.hotels.map(hotel =>
            <li key={hotel.id} >
                <Post hotel={hotel}/></li>)
        return (
            <ul>
                {PostHotel}
            </ul>
        )
    }
}
