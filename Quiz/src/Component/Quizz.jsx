import React, { useState } from 'react';

function Quizz() {
  const questions = [
    {
      question: "Dans quel jeu vidéo célèbre incarnez-vous un plombier italien nommé Mario ?",
      options: ["The Legend of Zelda", "Sonic the Hedgehog", "Super Mario Bros.", "Donkey Kong"],
      answer: "c) Super Mario Bros.",
    },
    {
      question: "Quel jeu populaire de survie en monde ouvert a été développé par Mojang et permet aux joueurs de construire et explorer des mondes infinis ?",
      options: ["Terraria", "Minecraft", "Stardew Valley", "Fortnite"],
      answer: "b) Minecraft",
    },
    {
      question: "Qui est le personnage principal de la série de jeux vidéo 'The Legend of Zelda' de Nintendo ?",
      options: ["Samus Aran", "Link", "Ganondorf", "Princess Peach"],
      answer: "b) Link",
    },
    {
      question: "Quel jeu de tir à la première personne (FPS) emblématique a été développé par id Software et est sorti en 1993, contribuant à populariser le genre ?",
      options: ["Doom", "Quake", "Half-Life", "Call of Duty"],
      answer: "a) Doom",
    },
    {
      question: "Dans quel jeu vidéo de stratégie en temps réel (STR) pouvez-vous contrôler des civilisations historiques et les guider à travers différentes ères, de l'Antiquité à l'ère moderne ?",
      options: ["Age of Empires", "Civilization", "Total War", "StarCraft"],
      answer: "b) Civilization",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null); 
    } else {
      
    }
  };

  return (
    <div>
      <h2>Question {currentQuestion + 1}:</h2>
      <p>{questions[currentQuestion].question}</p>
      {questions[currentQuestion].options.map((option, index) => (
        <button
          key={index}
          className={selectedOption === option ? 'selected' : ''}
          onClick={() => handleOptionSelect(option)}
        >
          {option}
        </button>
      ))}
      <button onClick={handleNextQuestion}>Suivant</button>
    </div>
  );
}

export default Quizz;
