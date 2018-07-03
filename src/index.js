import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
// import App from './App';
import Post from './Post'
import registerServiceWorker from './registerServiceWorker';
import hotels from "./data";
import PostsList from './PostsList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();


function App() {

    // console.log(hotels[0])
        return (
            <div className="container" >
                <PostsList hotels = {hotels}/>
            </div>
        )
}





ReactDOM.render(<App/>, document.getElementById("test"));





export default App



