import React, {Component} from 'react';

class Navbar extends Component{
    render(){
        let imageUrl= "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        return (
            <nav>
                <div />
                <div><img 
                src={imageUrl}
                alt="PokeApi logo"
                className="navImg"></img>
                </div>
                <div>♥</div>
            </nav>
        );
    }
}
export default Navbar;