import React, {Component} from 'react';
import axios from 'axios';
import Player from './Player';

class Pick extends Component {
    constructor(props){
        super(props);
        this.state = {
            players: []
        }
    }

    componentDidMount(){
        this.getPlayers();
    }

    getPlayers = () => {
        axios.get('/api/players')
        .then(res => {
            this.setState({players: res.data})
        })
        .catch(err => console.log(err))
    }

    render(){
        const mappedPlayers = this.state.players.map((player, i) => (
            <Player
                key={i}
                player={player}
                pickFn={this.props.pickFn}
                refreshFn={this.getPlayers}/>
        ))
        return(
            <div className='player-flex'>
                {mappedPlayers}
            </div>
        )
    }
}

export default Pick;