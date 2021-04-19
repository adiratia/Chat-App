const WebSocket= require('ws');
var models = require('./server.js').models;

const ws= new WebSocket.Server({port:4444});
const clients = [];


ws.on('connection' ,(ws)=>{
    function login(email,pass){
        console.log("EM",email,pass);
        models.User.login({email:email,password:pass},(err,result)=>{
            if(err){
                ws.send(JSON.stringify({
                    type:'ERROR',
                    error: err
                }));
            }else{
                models.User.findOne({where:{id:result.userId},include:'Profile'},(err2,user)=>{
                    if(err2){
                        ws.send(JSON.stringify({
                            type:'ERROR',
                            error: err
                        }));

                    }else{
                        const userObject={
                            id:user.id,
                            email: user.email,
                            ws:ws
                        };

                        clients.push(userObject);
                        console.log("Current clients", clients);

                        ws.send(JSON.stringify({
                            type:'LOGGEDIN',
                            data:{
                                session:result,
                                user:user
                            }
                        }))
                    }
                })
            }
        })
    }



    ws.on('message', (message)=>{
        console.log('Got message ', JSON.parse(message));
        let parsed = JSON.parse(message);
        console.log('Got  ', parsed);

        if(parsed){
            switch(parsed.type){
                case 'SIGNUP':
                   models.User.create(parsed.data,(err,user)=>{
                       if(err){
                           ws.send(JSON.stringify({
                               type:'ERROR',
                               error:err
                           }));
                       }else{
                           models.Profile.create({
                               userId:user.id,
                               name:parsed.data.name,
                               email:parsed.data.email
                           },(profileError,profile)=>{

                           })
                       }
                   }) 
                case 'LOGIN':
                    console.log("Heree login");
                    login(parsed.data.email,parsed.data.password);
                case 'SEARCH':
                    console.log("searching for", parsed.data);
                    models.User.find({where:{email:{like:parsed.data}}},(err2,users)=>{
                        if(!err2 && users){
                            console.log("users :", users);

                            ws.send(JSON.stringify({
                                type:'GOT_USERS',
                                data:{
                                    users: users
                                }
                            }))
                        }
                    })
                default:
                    console.log("Nothing o serr here");
            
            }
        }
    });
})