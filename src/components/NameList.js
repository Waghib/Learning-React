import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Bruce", "Clark", "Diana", "Bruce"];
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Vue",
    },
  ];
  const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>);
  return <div>{nameList}</div>;
}

export default NameList;

// Index as key
// When to use index as key?
// The items in your list do not have a unique id.
// The list is a static list and will not change.
// The list will never be reordered or filtered.