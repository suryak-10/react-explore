"use client"
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:1000');
// const roomId = '63927472' + Math.ceil(Math.random() * 100);

const Home = ({ params }: { params: { roomId: string } }) => {
  const roomId = params.roomId;
  const [message, setMessage] = useState('');
  const [receivedMessage, setReceivedMessage] = useState('');

  useEffect(() => {

    const onAnyHandler = (event, ...data) => {
      console.log(event, data);
    }
    socket.onAny(onAnyHandler)

    // Clean up the socket connection on component unmount
    return () => {
      socket.offAny(onAnyHandler);
    };
  }, []);

  return (
    <div>
      <h1>Socket.IO with Next.js</h1>
      <p>Room {roomId}</p>
      <p>Status {socket.connected ? "connected": 'disconnected'}</p>
      <button
        onClick={() => {
          socket.emit('joinRoom', { roomId, type: 'client', name: 'surya' })
          console.log(socket);
        }}
      >send</button>

      {['fileCompleted', 'fileStarted', 'fileErrored', 'getRoom'].map((fileEvenv, index) => <button key={index}
        onClick={() => {
          socket.emit(fileEvenv, { roomId })
        }}
      >{fileEvenv}</button>)}

      <button onClick={() => socket.disconnect()}>disconnect</button>

      <div>
        <h2>Received Message:</h2>
        <p>{receivedMessage}</p>
      </div>
    </div>
  );
};

export default Home;
