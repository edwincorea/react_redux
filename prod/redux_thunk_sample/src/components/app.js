import React, { Component } from 'react';
import {connect} from "react-redux";

import {fetchUsers} from "../actions";

class App extends Component {
  componentWillMount(){
    this.props.fetchUsers();
  }

  renderUsers(){ 
    const {users} = this.props;

    if (!users){
        return <div>Loading...</div>;
    }
       
    return users.map(({id, name, email}) => {
      return (
        <li className="list-group-item" key={id}>
          <span className="label label-default label-pill pull-xs-right">
            <a href={email}>{email}</a>
          </span>        
          {name}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h4>Email Directory</h4>
        <ul className="list-group">
          {this.renderUsers()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {users: state.users.all};
};

export default connect(mapStateToProps, {fetchUsers})(App);