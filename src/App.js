import {BrowserRouter,Switch, Route,Redirect } from 'react-router-dom'
import {connect} from 'react-redux'; 
import * as ChatActions from './store/actions/chatActions'
import React from 'react';
import * as AuthActions from './store/actions/authActions';
import Auth from './components/pages/Auth';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';




class App extends React.Component {
  componentDidMount(){
    this.props.setupSocket();
  }
  render(){
    return (
      <div className="App">
        <button onClick={e=>{
          this.props.logout();
        }
        }>Log out</button>
        <BrowserRouter>
        <Switch>
          <Route
            path="/login"
            render={props =>{
              if(this.props.token){
                return (
                  <Redirect to="/" />
                )
              }else{
                return (
                  <Auth/>
                )
              }
            }}
         />
            <Route
            path="/signup"
            render={props =>{
              if(this.props.token){
                return (
                  <Redirect to="/" />
                )
              }else{
                return (
                  <Auth/>
                )
              }
            }}         />

          <Route
            path="/"
            render= {props =>{
              if (!this.props.token){
                return(
                  <Redirect to="/login"/>

                )
              }
              else{
                return(
                  <h1>Root</h1>
                )
              }
            }} />
        </Switch>
        </BrowserRouter>

      </div>
    )
 }
}

const mapStateToProps = state=>({
  ...state.auth,
  ...state.chat
})
const mapDisptchtoProps =dispatch =>({
  setupSocket: ()=>{
    dispatch(ChatActions.setupSocket());
  },
  logout: () =>{
    dispatch(AuthActions.logout());
  }

})

export default connect(
  mapStateToProps,
  mapDisptchtoProps
)(App);
