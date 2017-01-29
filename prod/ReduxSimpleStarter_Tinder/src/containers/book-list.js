import React, {Component} from "react";
import { connect } from "react-redux";

//We promote BookList from dumb component to smart component (container). 
//A container is a component which has direct access to the state produced by Redux.
class BookList extends Component {
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

function mapStateToProps(state) {
    //whatever is returned will show up as props inside BookList container
    return {
        books: state.books
    };
}

export default connect(mapStateToProps)(BookList);