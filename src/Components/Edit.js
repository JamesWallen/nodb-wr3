import React, {Component} from 'react';

class Edit extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            name: '',
        }
    }

    handleInput = (val) => {
        this.setState({name: val})
    }

    handleToggle = () => {
        this.setState({isEditing: !this.state.isEditing})
    }

    handleEdit = (id) => {
        this.props.nameFn(id, this.state.name);
        this.handleToggle();
    }

    render(){
        return (
            <div>
                <img src={this.props.player.img} alt={this.props.player.name}/>
                {this.state.isEditing
                ?(
                    <div>
                        <input
                            value={this.state.name}
                            onChange={e => this.handleInput(e.target.value)}/>
                            <button onClick={() => this.handleEdit(this.props.player.id)}>Submit</button>
                    </div>
                )
                : (
                    <div>
                        <p>{this.props.player.name}</p>
                        <button onClick={this.handleToggle}>Edit Name</button>
                    </div>
                )}
                
                <button onClick={() => this.props.deleteFn(this.props.player.id)}>Delete</button>

            </div>
        )
    }
}

export default Edit;