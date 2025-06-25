import React, { useState } from "react";

const Display = (props) => <h1>{props.title}</h1>;
const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;
const Statistics = ({ good, neutral, bad, total, average, percentage }) => {
  if (total === 0) {
    return (
      <tr>
        <td colSpan="2">
          <h3>No feedback given yet!</h3>
        </td>
      </tr>
    );
  }
  return (
    <>
      <tr>
        <td>Good:</td>
        <td>{good}</td>
      </tr>
      <tr>
        <td>Neutral:</td>
        <td>{neutral}</td>
      </tr>
      <tr>
        <td>Bad:</td>
        <td>{bad}</td>
      </tr>
      <tr>
        <td>Total:</td>
        <td>{total}</td>
      </tr>
      <tr>
        <td>Average:</td>
        <td>{average.toFixed(2)}</td>
      </tr>
      <tr>
        <td>Percentage:</td>
        <td>{percentage.toFixed(2)}%</td>
      </tr>
    </>
  );
};
const Unicafe = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const percentage = total === 0 ? 0 : (good / total) * 100;

  return (
    <div>
      <Display title="Give Feedback" />
      <Button onClick={handleGood} text="Good" />
      <Button onClick={handleNeutral} text="Neutral" />
      <Button onClick={handleBad} text="Bad" />
      <Display title="Statistics" />
      <table>
        <tbody>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            average={average}
            percentage={percentage}
          />
        </tbody>
      </table>
    </div>
  );
};

export default Unicafe;
