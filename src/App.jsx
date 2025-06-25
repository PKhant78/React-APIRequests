import React, { useEffect, useState } from "react";
import axios from "axios";
import { createRoot } from "react-dom/client";

import "./style.css";
import SearchField from "./SearchField";
import GifCard from "./GifCard";

const GIPHY_API_KEY = "3uPYTPfMF80n8U1q1PLoIu75lKpbeFzk";

const App = () => {
  const [data, setData] = useState([]);

  const fetchData = async (searchValue) => {
    const response = await axios.get(
      `https://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=${GIPHY_API_KEY}`
    );
    console.log(response.data);
    setData(response.data.data); // set the arrays of GIF objects into data
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="app">
      <h1 className="title">Search GIFS!</h1>
      <SearchField fetchData={fetchData} />
      <GifCard data={data} />
    </div>
  );
};

// The following lines initialize your React application and inject
// it into the index.html
const root = createRoot(document.getElementById("root"));
root.render(<App />);
