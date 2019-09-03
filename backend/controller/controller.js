const auth = require('./auth/auth');



 const authController = (conn)=>{
    auth.authService(conn);
 }


module.exports = {
    authController
}


