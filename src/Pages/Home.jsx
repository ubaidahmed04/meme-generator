import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ".././App.css";

import { Button } from "react-bootstrap";
function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "https://api.imgflip.com/get_memes"
        );
        setData(response.data.memes);

        console.log(data && data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="header">
      <h1 className="meme-heading">MEME GENERATOR</h1>
      <div className="gallery">
        {data &&
          data.map((v) => {
            return (
              <div key={v.id} className="card-content">
                <div className="image">
                  <img src={v.url} alt="Image 1" />
                </div>
                <div className="title">{v.name}</div>
                <Button
                  onClick={(e) => navigate(`/meme?url=${v.url}`)}
                  type="primary"
                >
                  Add Caption
                </Button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
