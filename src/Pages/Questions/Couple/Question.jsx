import React, { useState } from "react";

const QuestioningPage = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correct: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correct: "Mars",
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correct: "4",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      alert(`Game Over! Your score: ${score + (selectedOption === questions[currentQuestion].correct ? 1 : 0)}/${questions.length}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-5">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-4">{questions[currentQuestion].question}</h2>
        <div className="grid grid-cols-2 gap-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className={`p-3 rounded-lg border text-white transition ${selectedOption === option ? "bg-blue-500" : "bg-gray-700 hover:bg-gray-600"}`}
              onClick={() => setSelectedOption(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
          disabled={!selectedOption}
        >
          {currentQuestion < questions.length - 1 ? "Next" : "Finish"}
        </button>
        <p className="mt-4 text-sm">Score: {score}/{questions.length}</p>
      </div>
    </div>
  );
};

export default QuestioningPage;
