import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'; 

class ThreadView extends Component {
    componentDidMount(){
        this.init();
    }

    componentDidUpdate(props){
        if(props.match.params.threadId!== this.props.match.params.threadId){
                this.init();
        }
    }
    init = () =>{
        let currentThread = this.props.threads.filter(t=> t.id === this.props.match.params.threadId)[0];
        if(currentThread && this.props.socket){
            console.log ("SOCKET", this.props.socket.readyState)
            let skip = currentThread.Messages || 0;
            this.props.socket.send(JSON.stringify({
                type: 'THREAD_LOAD',
                data: { 
                threadID: this.props.match.params.threadId,
                skip : skip
                }
            }))
        }

    }

    render(){
        return(
            <div className="main-view">
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
  )(withRouter(ThreadView));