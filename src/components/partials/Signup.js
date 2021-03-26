import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter,Link} from 'react-router-dom';

class Signup extends Component{
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
                                        type: 'SIGNUP',
                                        data:{
                                            email : this.state.email,
                                            password: this.state.password
                                        }
                                    }))
                                }
                            }}
                        >
                            <h3>Register</h3>

                            <div className="form-group">
                                <label>Email</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder="Enter email"
                                    value={this.state.email}
                                    onChange={e=>this.setState({email:e.target.value})} />
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

                            <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                            <p className="forgot-password text-right">
                                Already registered ? <Link to="/login">Login</Link>
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
)(Signup);