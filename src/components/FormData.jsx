export const FormData = ({
  newName,
  setNewName,
  newNumbers,
  setNewNumbers,
  persons,
  setPersons,
}) => {
  const handlerSubmit = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      setNewNumbers("");
      return;
    }

    const personObject = {
      name: newName,
      number: newNumbers,
    };

    setPersons([...persons, personObject]);
  };

  const handlerChangeName = (event) => {
    setNewName(event.target.value);
  };

  const handlerAddNumber = (event) => {
    setNewNumbers(event.target.value);
  };

  return (
    <form onSubmit={handlerSubmit}>
      <div>
        Name: <input value={newName} onChange={handlerChangeName} />
      </div>
      <div>
        Number: <input value={newNumbers} onChange={handlerAddNumber} />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};
