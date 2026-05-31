import { useEffect, useContext } from "react";
import { todoContext } from "../context/todoContext";
export default function useTodo() {
  const context = useContext(todoContext);
  if (!context) {
    throw new Error("useTodo must be used within a todoProvider");
  }

  return context;
}
