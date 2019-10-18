import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/colors", {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
      .then(res => {
        setColorList(res.data);
      })
      .catch(err => console.log("error in get in Friends.js", err));
  }, []);
  

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
