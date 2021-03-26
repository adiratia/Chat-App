import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter,Link} from 'react-router-dom';
import * as AuthActions from '../../store/actions/authActions';
import Login from '../partials/Login';
import Signup from '../partials/Signup';
class Auth extends Component{

    render(){
        return (
            <div className="auth-wrapper">
                {this.props.match.path === '/signup' ?
                <Signup/>
                :
                <Login/>
                
            }


            </div>
        )
    }

}

const mapStateToProps = state =>({
    ...state.auth
})

const mapDisptchtoProps= dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDisptchtoProps
)(withRouter(Auth));