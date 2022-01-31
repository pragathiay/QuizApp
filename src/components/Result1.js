import React, { useState } from "react";
import Questions from "./Questions";
import { v4 as uuidv4 } from "uuid";
// import { Paper } from "@material-ui/core";
// import {
//   Chart,
//   PieSeries,
//   Title,
// } from "@devexpress/dx-react-chart-material-ui";

const Result1 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [showScore, setShowScore] = useState(false);

  const handleCorrectAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setClicked(true);
  };
  const handleNextQuestion = () => {
    setClicked(false);
    if (currentQuestion < Questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div>
      <div className="app-wrapper">
        {showScore ? (
          <div>
            <div className="completed"> complete!</div>
            <div className="score-section">
              you score:{score}/{Questions.length}
            </div>
            {/* <Paper>
              <Chart score={score}>
                <PieSeries valueField="value" argumentField="argument" />
                <Title text="Pie chart" />
              </Chart>
            </Paper> */}
          </div>
        ) : (
          <div>
            <div className="question-section-wrapper">
              <div className="question-count">
                Question{currentQuestion + 1} of {Questions.length}
              </div>

              <div className="question">
                {Questions[currentQuestion].question}
              </div>
            </div>
            <div className="answer-section-wrapper">
              {Questions[currentQuestion].answerList.map((answerOption) => (
                <li className="answer-list" key={uuidv4()}>
                  <button
                    disabled={clicked}
                    className={`answer-button ${
                      clicked && answerOption.isCorrect
                        ? "correct"
                        : "" || (clicked && answerOption.isInCorrect)
                        ? "wrong"
                        : ""
                    }`}
                    onClick={() => handleCorrectAnswer(answerOption.isCorrect)}
                  >
                    {answerOption.answer}
                  </button>
                </li>
              ))}
            </div>

            <div>
              <button
                className="next-btn"
                onClick={handleNextQuestion}
                disabled={!clicked}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Result1;
