const authApp = require('../../index')
const $query = require('../middleware')
const asa = require('express');
const axx  = asa();

var authService = (conn)=>{
            axx.get('/login',(req,res,next)=>{
                console.log('call huaa hai .........');
            $query.query(conn,'select idClass,className from classes', (err, data)=> {
                // res.status(200).json({
                //     message:"Product added.",
                //     productId: data.insertId
                // });
                
                if(err){
                    console.log('Error on query :;',err);
                }else{
        
                    console.log('Data :', data); 
                    res.send(data);   
                }
            });
        })
   }   


module.exports = {
    authService
    
}