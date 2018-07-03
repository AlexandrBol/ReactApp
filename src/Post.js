import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();


    function Post(props) {

        const {hotel} = props;
        console.log(props)
        return (
            <div className="card">
                <div className="card-header">
                    <h2>{hotel.name}</h2>
                    <button  type="button" className="btn btn-info">Click</button>

                </div>
                <div className="card-body ">
                    <p>{hotel.description}</p>
                </div>

            </div>
        )

}


export default Post