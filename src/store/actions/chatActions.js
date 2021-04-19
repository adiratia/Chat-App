import * as AuthActions from './authActions';


export const setupSocket=()=>{
    return dispatch =>{
    const socket=new WebSocket('ws://localhost:4444');
    socket.onopen=()=>{
        dispatch({
            type:'SETUP_SOCKET',
            payload:socket
        });
    }

    socket.onmessage = (message)=>{
        console.log("message",message);
       let data = JSON.parse(message.data); 

        switch(data.type){

            case 'LOGGEDIN':
                dispatch(AuthActions.loggedIn(data))
                break;
            case 'GOT_USERS':
                dispatch({
                    type: 'GOT_USERS',
                    payload:data.data.users

                });
                break;
            default:
                //do nothing
        }
    }
}
}