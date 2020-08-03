import React from 'react';
import Edit  from './Edit';

const Team = props => {
    const mappedPlayers = props.pickPlayer.map((player, i) => (
        <Edit
            key={i}
            player={player}
            nameFn={props.nameFn}
            imgFn={props.imgFn}
            releaseFn={props.releaseFn}
            deleteFn={props.deleteFn}/>
    ))

    return (
        <div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsQl4yimtTi6OrCwdmbp5FO25y-6Lp7M7kiQ&usqp=CAU' alt="basketball"/>
            </div>
            <h1>Your Team!!!</h1>
            <div className='player-flex'>
                {mappedPlayers}
            </div>
        </div>
    )
}

export default Team;