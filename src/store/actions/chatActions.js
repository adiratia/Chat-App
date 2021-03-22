export const setupSocket=()=>{
    return dispatch =>{
    const socket=new WebSocket('ws://localhost:4444');
    socket.onopen=()=>{
        dispatch({
            type:'SETUP_SOCKET',
            payload:socket
        });
    }
}
}