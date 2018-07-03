import React from 'react';
//import hotels from "./fixtures"
import Post from './Post'


export default function PostsList({hotels}) {

    const PostHotel = hotels.map(hotel =>
        <li key={hotel.id}>
            <Post hotel={hotel}/></li>)
    return (
        <ul>
            {PostHotel}
        </ul>
    )

}