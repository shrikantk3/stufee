// const configA = require('../config')
// const connection = configA.configSetup();
function executeQuery(connection,sql, callback) {
    connection.query(sql, function (error, results, fields) {
    if (error) {
            return callback(error, null);
    } 
    return callback(null, results);
    });
            
}
 
function query(conn,sql, callback) {    
    executeQuery(conn,sql,function(err, data) {
        if(err) {
            return callback(err);
        }       
        callback(null, data);
    });
}


module.exports = { query }