import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'; 

class Sidebar extends Component {
    render(){
        return(
            <div className="sidebar">
                hello
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