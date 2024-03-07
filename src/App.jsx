import { personToShow } from "./helpers/peopleToShow";
import { usePersonHook, useNumberHook, useNameHook } from "./hooks";
import { FilterPerson, FormData } from "./components";

const App = () => {
  const { persons, setPersons, filteredPersons, setFilteredPersons } =
    usePersonHook();
  const { newNumbers, setNewNumbers } = useNumberHook();
  const { newName, setNewName, searchName, setSearchName } = useNameHook();

  const handlerSearchName = (event) => {
    const value = event.target.value;
    setSearchName(value);
    const filtered = persons.filter((person) =>
      person.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPersons(filtered);

    if (value === "") {
      setFilteredPersons([]);
    }
  };

  const personsToShow = personToShow(persons, filteredPersons);

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterPerson
        searchName={searchName}
        handlerSearchName={handlerSearchName}
      />
      <h3>Add a new</h3>
      <FormData
        newName={newName}
        setNewName={setNewName}
        newNumbers={newNumbers}
        setNewNumbers={setNewNumbers}
        persons={persons}
        setPersons={setPersons}
      />
      <h3>Numbers</h3>
      <ul>
        {personsToShow.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
