import { useState } from "react";

export const useNameHook = () => {
  const [newName, setNewName] = useState("");
  const [searchName, setSearchName] = useState("");

  const handlerChangeName = (event) => {
    setNewName(event.target.value);
  };

  return {
    newName,
    searchName,
    setNewName,
    setSearchName,
    handlerChangeName,
  };
};
