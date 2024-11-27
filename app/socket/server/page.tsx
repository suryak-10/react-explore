"use client"
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { fileNames } from '../_utils/fileNames';

const socket = io('http://localhost:1000/script-process');
// const roomId = '63927472' + Math.ceil(Math.random() * 100);

const Home = () => {
  const [roomId, setRoomId] = useState('');
  const [message, setMessage] = useState('');
  const [receivedMessage, setReceivedMessage] = useState('');
  const [fileStatus, setFileStatus] = useState<{ fileName: string, status: 'fileCompleted' | 'fileStarted' | 'fileErrored' | "fileNotProcessed" }[]>(fileNames.map(file => ({ fileName: file, status: 'fileNotProcessed' })))

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
      <input type="text" placeholder='room' onChange={(e) => setRoomId(e.target.value)} />
      <p>Room {roomId}</p>
      <p>Status {socket.connected ? "connected" : 'disconnected'}</p>
      <button
        onClick={() => {
          socket.emit('joinRoom', { roomId, type: 'server', name: 'aws' })
          console.log(socket);
        }}
      >send</button>

      {['fileCompleted', 'fileStarted', 'fileErrored', 'getRoom', 'processCompleted'].map((fileEvenv, index) => <button key={index}
        onClick={() => {
          socket.emit(fileEvenv, { fileName: `sample${index + 1}.docx` });
        }}
      >{fileEvenv}</button>)}

      <button onClick={() => socket.disconnect()}>disconnect</button>
      <button onClick={() => {
        fileNames.forEach((file, index) => {
          setTimeout(() => {
            socket.emit('fileStarted', { fileName: file })
          }, 1000 * index + 1);
        })
      }}>process</button>
    </div>
  );
};

export default Home;
