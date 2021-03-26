import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter,Link} from 'react-router-dom';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }

    render(){
        return(
            <div  className ="login-page" >
                <div className = "containter" >
                    <div className = "login-form">

                        <div className= "row">

                            <form 
                                onSubmit ={e=>{
                                    e.preventDefault();
                                    if(this.props.socket){
                                        this.props.socket.send(JSON.stringify({
                                            type: 'LOGIN',
                                            data:{
                                                email : this.state.email,
                                                password: this.state.password
                                            }
                                        }))
                                    }
                                }}
                            >
                            <h3>Login</h3>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                         type="email" 
                                         className="form-control" 
                                         placeholder="Enter email" 
                                         value={this.state.email}
                                         onChange={e=>this.setState({email:e.target.value})}/>
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        placeholder="Enter password" 
                                        value={this.state.password}
                                        onChange={e=>this.setState({password:e.target.value})} />
                                </div>

                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                                <p className="forgot-password text-right">
                                    Don't have an account? <Link to='/signup'>Signup</Link>
                                </p>
                            </form>
                        </div>
                    </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    ...state.auth,
    ...state.chat
})

const mapDisptchtoProps= dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDisptchtoProps
)(Login);