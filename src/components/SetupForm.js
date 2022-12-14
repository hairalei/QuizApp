import React from "react";
import { useGlobalContext } from "../context";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();

  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>Choose category</h2>
          <div className="form-control">
            <label htmlFor="amount">number of questions</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={quiz.amount}
              onChange={handleChange}
              className="form-input"
              min={1}
              max={50}
            />
          </div>

          <div className="form-control">
            <label htmlFor="category">category</label>
            <select
              name="category"
              id="category"
              className="form-input"
              value={quiz.category}
              onChange={handleChange}
            >
              <option value="celebrities">celebrities</option>
              <option value="videoGames">video games</option>
              <option value="animals">animals</option>
              <option value="cartoons">cartoons and animations</option>
              <option value="mythology">mythology</option>
              <option value="geography">geography</option>
            </select>
          </div>

          <div className="form-control">
            <label htmlFor="difficulty">difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              className="form-input"
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>
          {error && (
            <p className="error">
              can't generate questions. Please try different options
            </p>
          )}
          <button
            type="submit"
            className="submit-btn"
            onSubmit={handleSubmit}
            onClick={handleSubmit}
          >
            Start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
