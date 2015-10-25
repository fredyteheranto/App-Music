// Condiguracion servidor con node y espresss
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.get('/',function(request, response){
response.sendFile(__dirname + '/public');
//response.send('Buenas habemus server !');
});
app.listen(3000, function(){
console.log('El servidor esta listo');
});