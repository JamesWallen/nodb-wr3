import React, {Component} from 'react';
import Header from './Components/Header';
import Pick from './Components/Pick';
import './App.css';
import axios from 'axios';
import Team from './Components/Team';



class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            pickPlayer: []
        }
        this.pickPlayer = this.pickPlayer.bind(this)
        
    }
    componentDidMount(){
        axios.get('/api/pick')
        .then(res => {
            this.setState({pickPlayer: res.data})
        })
        .catch(err => console.log(err));
    }
    
    pickPlayer(player){
        console.log(player)
        axios.post('/api/pick', player)
        .then(res => {
            this.setState({pickPlayer: res.data})
        })
        .catch(err => console.log(err))
    }

    editName = (id, newName) => {
        let body = {name: newName};

        axios.put(`/api/pick/${id}`, body)
        .then(res => {
            this.setState({pickPlayer: res.data})
        })
        .catch(err => console.log(err));
    }

    deletePlayer = (id) => {
        axios.delete(`/api/pick/${id}`)
        .then(res => {
            this.setState({pickPlayer: res.data})
        })
        .catch(err => console.log(err));
    }



    render() {
        return(
            <div className="App">
                <Header/>
                <Pick 
                pickFn={this.pickPlayer}/>
                <Team
                    pickPlayer={this.state.pickPlayer}
                    nameFn={this.editName}
                    deleteFn={this.deletePlayer}/>
            </div>
        )
    }
}

export default App;