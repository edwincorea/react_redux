import React, {Component} from "react";
import {connect} from "react-redux";
import {selectBook} from "../actions/index";
import {bindActionCreators} from "redux";

//We promote BookList from dumb component to smart component (container). 
//A container is a component which has direct access to the state produced by Redux.
class BookList extends Component {
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
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

//mapStateToProps: anything returned from this function will show up as props on the BookList container. props.books
const mapStateToProps = (state) => {    
    return {
        books: state.books
    };
}

//mapDispatchToProps: anything returned will end up as props on the BookList container. props.selectBook
const mapDispatchToProps = (dispatch) => {
    //bindActionCreators: whenever selectBook action creator is called, the result should be passed to all of our reducers
    return bindActionCreators({selectBook}, dispatch);
}

// Promote BookList from a component to a container. It needs to know about this new dispatch method, selectBook.
// Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);