import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom'; 

class Sidebar extends Component {
    render(){
        return(
            <div className="sidebar">
                <ul className= "thread-list">
                    <label>Messages</label>
                    <li>
                        <Link to="/thread">
                            <i className= "zmdi zmdi-account-circle"/>
                            <h5>Name</h5>
                            <p>this is last message</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/thread">
                            <i className= "zmdi zmdi-account-circle"/>
                            <h5>Name</h5>
                            <p>this is last message</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/thread">
                            <i className= "zmdi zmdi-account-circle"/>
                            <h5>Name</h5>
                            <p>this is last message</p>
                        </Link>
                    </li>
                </ul>
            </div>
        )

    }
}
const mapStateToProps = state=>({
    ...state.auth,
    ...state.chat
  })
  const mapDisptchtoProps =dispatch =>({

  })

  export default connect (
      mapStateToProps,
      mapDisptchtoProps
  )(withRouter(Sidebar));