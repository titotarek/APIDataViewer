"use client"
import { useEffect, useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState({}); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        const result = await response.json();
        setTodo(result);
        // console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function within useEffect

  }, []); // The empty dependency array means this effect runs once on component mount

  return (
    <>
      <h1>{todo.title}</h1>
    </>
  );
}
