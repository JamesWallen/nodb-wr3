const pickPlayer = [];
let id = 1;

module.exports = {
    getPick: (req, res) => {
        res.status(200).send(pickPlayer)
    },

    postPlayer: (req, res) => {
        const{name} = req.body;
        console.log(name)
        const newPlayer = {
            name: name,
            id: id,
        }
        id++;

        pickPlayer.push(newPlayer);
        res.status(200).send(pickPlayer);
    },

    editName: (req, res) => {
        const{id} = req.params;
        const {name} = req.body;
        // console.log(name)
        // console.log(req.body)

        const index = pickPlayer.findIndex(pickPlayer => pickPlayer.id === +id);
        pickPlayer[index].name = name;
        res.status(200).send(pickPlayer);
    },

    deletePlayer: (req, res) => {
        const {id} = req.params;
        const index = pickPlayer.findIndex(pickPlayer => pickPlayer.id === +id);
        pickPlayer.splice(index, 1);
        res.status(200).send(pickPlayer);
    }
}