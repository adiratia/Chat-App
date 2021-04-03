import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'; 
import Sidebar from '../partials/Sidebar';
import ThreadView from '../partials/ThreadView';

class Messenger extends Component {
    render(){
        return(
            <div calssName="messenger-container">
                <Sidebar/>
                <ThreadView/>
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
  )(withRouter(Messenger));