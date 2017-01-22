import React, {Component} from "react";

// Functional component. Not aware of its state.
// const SearchBar = () => {
//     return <input />;
// };

// We need the component to be aware of its state, to communicate to ther components. 
// Promote to class-based component.
// Controlled component: state controlls the component.
class SearchBar extends Component {
    //initialize state for SearchBar component
    constructor(props) {
        super(props);

        this.state = {term: ""};
    }

    render(){
        return (
            <div>
                <input 
                    value={this.state.term}
                    onChange={event => this.setState({term: event.target.value})} />
            </div>
        );            
    }                
}


export default SearchBar;