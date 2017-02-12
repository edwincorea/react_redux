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
            <div className="search-bar">
                <input 
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );            
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}


export default SearchBar;