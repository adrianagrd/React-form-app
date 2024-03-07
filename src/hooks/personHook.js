import { useState } from "react";
import { personsData } from "../data";

export const usePersonHook = () => {
  const [persons, setPersons] = useState(personsData);
  const [filteredPersons, setFilteredPersons] = useState([]);

  return {
    persons,
    filteredPersons,
    setPersons,
    setFilteredPersons,
  };
};
