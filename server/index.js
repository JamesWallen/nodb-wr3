//bringing in playerCtrl
const playerCtrl = require('./controllers/playerCtrl');
//bringing in pickCtrl
const pickCtrl = require('./controllers/pickCtrl');
//bringing in express
const express = require('express');
const app = express();

app.use(express.json());


//applying full crud endpoints

//playerCtrl endpoint: get
app.get('/api/players', playerCtrl.getPlayer)

//pickCtrl endpoints: get, post, put, delete
app.get('/api/pick', pickCtrl.getPick);
app.post('/api/pick', pickCtrl.postPlayer);
app.put('/api/pick/:id',pickCtrl.editName);
app.delete('/api/pick/:id', pickCtrl.deletePlayer);


//adding server
app.listen(5454, () => console.log('Server is running on 5454'));