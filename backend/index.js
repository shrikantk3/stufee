const express = require('express');
const router = express.Router();
const app = express();
const body_parser = require('body-parser');
const cors = require('cors');
const connection = require('./config');
const auth_data = require('./controller/controller')
let configType = 'local';
// const router = app.Router();





app.use(cors);
app.use(body_parser.json());




appCreation = ()=>{
    if(configType === 'local'){
        connection.configSetup('localhost','test','root','').then((conn)=>{
        //    router.get('/',(req,res,next)=>{
            auth_data.authController(conn);
        //    })    
        });
    }else{
        connection.configSetup('18.188.31.240','STUFEE','manoj','Manoj@123').then(()=>{
            auth_data.authController();
        });
    }

    app.get('/api', (req, res)=>{
        res.send('API WORKING :)');
    });
    
    app.listen(8080);

}


module.exports = {
    app,
    appCreation,
    router
}



