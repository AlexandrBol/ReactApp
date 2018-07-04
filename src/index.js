import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import $ from 'jquery';

import registerServiceWorker from './registerServiceWorker';
import hotels from "./data";

//import PostsList from './PostsList';
import List from './HotelsList';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AddHotel from "./AddHotel";


registerServiceWorker();

    function App() {
        // console.log(hotels[0])
        return (
            <div className="container">
                <AddHotel/>
                <List hotels={hotels}/>
            </div>
        )
    }

ReactDOM.render(<App/>,document.getElementById("add"));
ReactDOM.render(<App/>,document.getElementById("view"));

export default App



