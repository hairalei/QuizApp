import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./components/SetupForm";
import Loading from "./components/Loading";
import Modal from "./components/Modal";

function App() {
  const { waiting, loading, questions, index, correct, checkAnswer } =
    useGlobalContext();

  if (waiting) {
    return <SetupForm />;
  }

  if (loading) {
    return <Loading />;
  }

  const { question, incorrect_answers, correct_answer } = questions[index];
  let answers = [...incorrect_answers];
  // answers.sort(() => (Math.random() > 0.5 ? 1 : -1));
  const tempIndex = Math.floor(Math.random() * 4);
  answers.splice(tempIndex, 0, correct_answer);

  return (
    <main>
      <Modal />

      <section className="quiz">
        <p className="correct-answers">
          correct answers: {correct} / {questions.length}
        </p>

        <article className="container">
          <h3>{index + 1}</h3>
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className="btn-container">
            {answers.map((answer, index) => {
              return (
                <button
                  className="answer-btn"
                  key={index}
                  onClick={() => checkAnswer(correct_answer === answer)}
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              );
            })}
          </div>
        </article>
      </section>
    </main>
  );
}

export default App;
