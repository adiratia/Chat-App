import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter,Link} from 'react-router-dom';

class Signup extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            passwordAgain:'',
            name:'',
            username:'',
            eroor:''
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
                                    let empty =0;
                                    Object.keys(this.state).map(key =>{
                                        if(this.state[key]===''){
                                            empty+=1;
                                        }
                                        
                                    })
                                   /* if(empty>0){
                                        return this.setState({error:'All Fields Required'});
                                    }
                                    else{
                                        if(this.state.password !== this.state.passwordAgain){
                                            return this.setState({error:'Password Must Match'});

                                        }
                                    }*/
                                    this.props.socket.send(JSON.stringify({
                                        type: 'SIGNUP',
                                        data:{
                                            email : this.state.email,
                                            password: this.state.password,
                                            name: this.state.name,
                                            username:this.state.username
                                        }
                                    }))
                                }
                            }}
                        >
                            <h3>Register</h3>
                            <div className="form-group">
                                <label>Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Enter name"
                                    value={this.state.name}
                                    onChange={e=>this.setState({name:e.target.value})} />
                            </div>
                            <div className="form-group">
                                <label>User name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Enter user name"
                                    value={this.state.username}
                                    onChange={e=>this.setState({username:e.target.value})} />
                            </div>

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
                            <div className="form-group">
                                <label>Password Again</label>
                                <input 
                                    type="password"
                                    className="form-control" 
                                    placeholder="Enter password again"
                                    value={this.state.passwordAgain}
                                    onChange={e=>this.setState({passwordAgain:e.target.value})} />
                            </div>

                            <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                            <p className="forgot-password text-right">
                                Already registered ? <Link to="/login">Login</Link>
                            </p>
                            {this.state.error ?
                                <p className="text-danger">{this.state.error}</p>
                            :
                            null
                            }
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