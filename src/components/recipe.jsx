const Recipe = ({ id, name, details, resturant_name }) => {
  console.log(name);
  return (
    <ul>
      <li>{id}</li>
      <li>{name}</li>
      <li>{details}</li>
      <li>{resturant_name}</li>
    </ul>
  );
};

export default Recipe;
