import React from "react";

const Header = ({ course }) => <h1>{course.name}</h1>;

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map((part, i) => (
        <p key={i}>
          {part.name} {part.exercises}
        </p>
      ))}
    </>
  );
};

const Total = (props) => <p>Number of exercises: {props.total}</p>;

const App = () => {
  const course = {
    name: "Half Stack Web application development",
    parts: [
      { name: "Fundmentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };

  const total = course.parts.map((a) => a.exercises).reduce((a, b) => a + b, 0);

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total total={total} />
    </div>
  );
};

export default App;
