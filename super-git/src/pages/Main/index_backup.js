import React from "react";
import "./styles.css";
import Clock from "../../components/Clock";

const data = [
  {
    name: "Repo1",
    description: "Just test",
    link: "http://www.google.com"
  },
  {
    name: "Repo2",
    description: "Just test",
    link: "http://www.google.com"
  }
];

const Main = () => {
  return (
    <>
      <h1>Super Git</h1>
      <Clock />
      <ul>
        {data.map(item => (
          <li>
            <span>{item.name}</span>
            <span>{item.description}</span>
            <a href={item.link}>{item.link}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Main;
