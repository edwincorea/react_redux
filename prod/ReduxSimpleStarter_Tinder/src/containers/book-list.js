import React, {component} from "react";

//We promote BookList from dumb component to smart component (container). 
//A container is a component which has direct access to the state produced by Redux.
export default class BookList extends Component {
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });
    }
    
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>            
        );
    }
}