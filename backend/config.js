var mysql = require('mysql');
var conn;
// exports.conn = mysql.createConnection({
//     host:'18.188.31.240',
//     database:'STUFEE',
//     user:'Manoj',
//     password:'Manoj@123',
//     port:3306
// });

const configSetup = (myHost, db, myUser, myPassword)=>{
   return new Promise((resolve, reject)=>{
     conn = mysql.createConnection({
        host: myHost,
        database: db,
        user: myUser,
        password: myPassword,
        // port:3306
    });
    conn.connect((err)=>{
        if(err){
            return reject(new Error('An Error occurs when connect to Server.'));
            // throw err;
        }else{
            console.log('connecttion Setup Successfully. PORT : 8080');
            resolve(conn);
        }
    });

   });       
}

module.exports = {
    configSetup,
    conn
}

