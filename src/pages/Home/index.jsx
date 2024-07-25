import React, { useEffect } from "react";
import "./style.css";
import { useState } from "react";
import axios from "axios";
import Recipe from "../../components/recipe";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "http://localhost/recipes/read_all_recipes.php"
      );
      setData(data.recipes);
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="recipe-container">
      {data.map((item, index) => (
        <Recipe key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Home;
