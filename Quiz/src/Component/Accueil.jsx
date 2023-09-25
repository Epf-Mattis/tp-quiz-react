import React from 'react';
import './styles.css';

function Accueil({ onStartQuizz }) {
  return (
    <div className="container">
      <h1>Bienvenue au Quizz!</h1>
      <p>Cliquez sur le bouton pour commencer le quizz.</p>
      <button onClick={onStartQuizz}>Commencer le quizz</button>
    </div>
  );
}

export default Accueil;
