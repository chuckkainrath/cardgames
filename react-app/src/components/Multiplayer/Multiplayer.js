import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { socket } from '../../util/socket';


function Multiplayer() {
    const dispatch = useDispatch();
    const [players, setPlayers] = useState()
    const user = useSelector(state => state.session.user);

    useEffect(() => {
        socket.emit('join', { username: user.username });

        return (() => {
            socket.emit('leave', { username: user.username });
        })
    }, []);

    useEffect(() => {
        socket.on('player_joined', data => {
            setPlayers(data.players)
        });

        socket.on('player_left', data => {
            setPlayers(data.players);
        })

        return (() => {
            socket.removeAllListeners('player_joined');
            socket.removeAllListeners('player_left');
        })
    }, [players])

    return (
        <div>
            {players &&
                players.map((player, idx) => (
                    <p key={idx}>{player}</p>
                ))
            }
        </div>
    );
}

export default Multiplayer;
