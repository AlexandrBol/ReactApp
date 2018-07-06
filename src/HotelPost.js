import React, {Component} from 'react';

import './index.css';

import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

registerServiceWorker();

class HotelPost extends Component {

    constructor() {
        super();
        this.state = {
            showData: true
        }
    }

    onClick(e) {
        e.preventDefault();
        console.log("CLICKED");
        this.setState({showData: !this.state.showData})
    }

    render() {
        const {hotel} = this.props;
        return (
            <div className="card" style={{marginTop: 20, marginRight: 0, marginBottom: 20, marginLeft: 0}}>
                <div className="card-header">
                    <h2 className="d-inline-block">{hotel.name}</h2>
                    <button type="button" className="btn btn-info pull-right d-inline-block"
                            onClick={this.onClick.bind(this)}>Click
                    </button>
                    <button
                        className="btn btn-info pull-right d-inline-block"
                        onClick={() => {
                            console.log('Clicked index ' + hotel.id);
                        }}>
                        Show Index
                    </button>
                </div>
                {this.state.showData &&
                <div className="card-body">
                    <p>{hotel.description}</p>
                </div>
                }
            </div>
        )
    }
}

export default HotelPost