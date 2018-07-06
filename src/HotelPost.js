import React, {PureComponent} from 'react';


import './index.css';

import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

registerServiceWorker();

class HotelPost extends PureComponent {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        const {hotel} = this.props;
        return (
            <div className="card">
                <div className="card-header">
                    <h2 className="d-inline-block">{hotel.name}</h2>
                    <button type="button" className="btn btn-info pull-right d-inline-block">Click</button>
                    <button
                        className="btn btn-info pull-right d-inline-block"
                        onClick={() => {
                            console.log('Clicked index ' + hotel.id);
                        }}>
                        Show Index
                    </button>

                    {/*onClick={show()}*/}
                </div>
                <div className="card-body">
                    <p>{hotel.description}</p>
                </div>
            </div>
        )
    }
}

export default HotelPost