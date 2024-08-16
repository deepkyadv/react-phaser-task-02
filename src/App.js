import React, { useRef } from 'react';
import Game from './Game';
import './App.css';

function App() {
  const gameRef = useRef(null);

  return (
    <div className="app-container">
      <div className="button-container top">
        <button onClick={() => gameRef.current.moveBall('up1')}>Button 1 (Up)</button>
        <button onClick={() => gameRef.current.moveBall('up2')}>Button 2 (Up)</button>
      </div>
      <div className="middle-container">
        <div className="button-container left">
          <button onClick={() => gameRef.current.moveBall('left1')}>Button 3 (Left)</button>
          <button onClick={() => gameRef.current.moveBall('left2')}>Button 4 (left)</button>

        </div>
        <div className="game-container">
          <Game ref={gameRef} />
        </div>
        <div className="button-container right">
          <button onClick={() => gameRef.current.moveBall('right1')}>Button 5 (Right)</button>
          <button onClick={() => gameRef.current.moveBall('right2')}>Button 6 (right)</button>

        </div>
      </div>
      <div className="button-container bottom">
        <button onClick={() => gameRef.current.moveBall('down1')}>Button 7 (Down)</button>
        <button onClick={() => gameRef.current.moveBall('down2')}>Button 8 (down)</button>

      </div>
    </div>
  );
}

export default App;
