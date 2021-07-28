import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { socket } from '../../util/socket';


function Multiplayer() {
    const dispatch = useDispatch();
    const [room, setRoom] = useState();
    const [users, setUsers] = useState()
    const user = useSelector(state => state.session.user);

    useEffect(() => {
        socket.emit('join', { username: user.username });

        return (() => {
            socket.emit('leave', { room, username: user.username });
        })
    }, []);

    useEffect(() => {
        socket.on('player_joined', data => {
            const room 
        });

    }, [users])

    return (
        <div>

        </div>
    );
}

export default Multiplayer;
