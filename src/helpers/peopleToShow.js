export const personToShow = (persons, filteredPersons) => {
  return filteredPersons.length > 0 ? filteredPersons : persons;
};
