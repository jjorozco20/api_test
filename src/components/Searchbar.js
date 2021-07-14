import React, {Component} from 'react';
//it cannot be used within a class method
// const {useState} = React;

class Searchbar extends Component{
    render(){
        //Need to update search's state to render in Application.js
        let search = "Pikachu";
        const onChange = (evt) =>{
            search = evt.target.value;
        }
        return(
            <div>
                <div>
                    <input
                    placeholder="Search Pokémon"
                    onChange={onChange}/> 
                </div>
                <div>
                    {search}
                </div>
            </div>
        );
    }
}
export default Searchbar;