const defaultState ={
    socket: null,
    message:'',
    threads :[],
    currentTread:''
}

const chat =(state=defaultState,action)=>{
    switch(action.type){
        case 'SETUP_SOCKET':
            return {
                ...state,
                socket:action.payload
            }
        default:
            return state
    }
}

export default chat