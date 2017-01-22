import React, {Component} from "react";

// Functional component. Not aware of its state.
// const SearchBar = () => {
//     return <input />;
// };

// We need the component to be aware of its state, to communicate to ther components. 
// Promote to class-based component.
class SearchBar extends Component {
    render(){
        return <input onChange={event => console.log(event.target.value)} />;
    }                
}


export default SearchBar;