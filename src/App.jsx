import React, { useState, useEffect } from 'react';
import './styles.css';
import { gameSounds } from './gameSounds.js';

function Square({ value, onSquareClick }) {
  const displayValue = value === 'X' ? '❌' : value === 'O' ? '⭕' : '';
  
  const handleClick = () => {
    // Solo reproducir sonido si la casilla está vacía
    if (!value) {
      gameSounds.playMoveSound();
    }
    onSquareClick();
  };
  
  return (
    <button className="square" onClick={handleClick}>
      {displayValue}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay, soundEnabled }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(square => square !== null);
  
  // Reproducir sonidos cuando hay un resultado
  useEffect(() => {
    if (soundEnabled) {
      if (winner) {
        // Pequeño delay para que se vea el movimiento antes del sonido
        setTimeout(() => gameSounds.playWinSound(), 100);
      } else if (isDraw) {
        setTimeout(() => gameSounds.playDrawSound(), 100);
      }
    }
  }, [winner, isDraw, soundEnabled]);

  let status;
  if (winner) {
    status = '🎉 Ganador: ' + winner + ' 🎉';
  } else if (isDraw) {
    status = '🤝 ¡Empate! 🤝';
  } else {
    status = 'Siguiente jugador: ' + (xIsNext ? '❌' : '⭕');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  // Sincronizar el estado del sonido con el objeto gameSounds
  useEffect(() => {
    if (soundEnabled) {
      gameSounds.enableSound();
    } else {
      gameSounds.disableSound();
    }
  }, [soundEnabled]);

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function resetGame() {
    gameSounds.playResetSound();
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Ir al movimiento #' + move;
    } else {
      description = 'Ir al inicio del juego';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '30px' }}>
        🎮 Tres en Línea - Tic Tac Toe 🎮
      </h1>
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} soundEnabled={soundEnabled} />
          <div style={{ textAlign: 'center', marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <button 
              onClick={resetGame}
              style={{
                background: '#e74c3c',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              🔄 Nuevo Juego
            </button>
            <button 
              onClick={() => {
                const newSoundState = gameSounds.toggleSound();
                setSoundEnabled(newSoundState);
              }}
              style={{
                background: soundEnabled ? '#2ecc71' : '#95a5a6',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              {soundEnabled ? '🔊 Sonido ON' : '🔇 Sonido OFF'}
            </button>
          </div>
        </div>
        <div className="game-info">
          <h3>📝 Historial de Movimientos</h3>
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}