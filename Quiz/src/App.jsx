import React, { useState } from 'react';
import Accueil from './Component/Accueil';
import Quizz from './Component/Quizz';

function App() {
  const [page, setPage] = useState('accueil');

  const commencerQuizz = () => {
    setPage('quizz');
  };

  return (
    <div className="App">
      {page === 'accueil' && <Accueil onStartQuizz={commencerQuizz} />}
      {page === 'quizz' && <Quizz />}
    </div>
  );
}

export default App;

