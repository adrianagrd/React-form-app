export const FilterPerson = ({ searchName, handlerSearchName }) => {
  return (
    <div>
      Filter shown with:
      <input value={searchName} onChange={handlerSearchName} />
    </div>
  );
};
