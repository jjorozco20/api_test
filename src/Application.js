import React, {Component} from 'react';
import './styles.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';

class Application extends Component{

    render(){
        return (
            <div>
                 <Navbar/>
                 <div className="App">
                     <Searchbar />
                 </div>
            </div>
        );
    }

}
export default Application;