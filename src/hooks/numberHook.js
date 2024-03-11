import { useState } from "react";

export const useNumberHook = () => {
  const [newNumbers, setNewNumbers] = useState("");

  const handlerAddNumber = (event) => {
    setNewNumbers(event.target.value);
  };

  return {
    newNumbers,
    setNewNumbers,
    handlerAddNumber,
  };
};
