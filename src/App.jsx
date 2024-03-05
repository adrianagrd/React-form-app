import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");

  const handlerChangeName = (event) => {
    setNewName(event.target.value);
  };

  const handlerAddNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handlerSearchName = (event) => {
    setSearchName(event.target.value);
    const filteredPersons = persons.filter((person) =>
      person.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    filteredPersons.length > 0
      ? setPersons(filteredPersons)
      : setPersons(persons);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      return;
    }

    const personObject = {
      name: newName,
      number: newNumber,
    };

    setPersons([...persons, personObject]);
    setNewName("");
    setNewNumber("");
    setSearchName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown with:
        <input value={searchName} onChange={handlerSearchName} />
      </div>
      <h3>Add a new</h3>
      <form onSubmit={handlerSubmit}>
        <div>
          name: <input value={newName} onChange={handlerChangeName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handlerAddNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>{person.name + " " + person.number}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
