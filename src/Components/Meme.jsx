import React, { useState } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import Draggable, { DraggableCore } from "react-draggable";
import { Button } from "react-bootstrap";
import { useRef,createRef } from "react";
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import ".././App.css";

function Meme() {
  const [params] = useSearchParams();
  const memeRef = createRef();
  // console.log(params.get("url"))
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  return (
    <div className="edit-content">
      <div >
        <h1 className="meme-heading mt-5 mb-5 ">ADD CAPTION</h1>

        <div className="caption">
          <div className="save-img" ref={memeRef}>
            <div>
              <img src={params.get("url")} width={"400px"} alt="" />
            </div>
            <div >
              <Draggable>
                <h2 className="text-show">{input1}</h2>
              </Draggable>
              <Draggable>
                <h2 className="text-show">{input2}</h2>
              </Draggable>
            </div>
          </div>
          
          <div className="input-content">
            <div>

            <input
              type="text"
              placeholder="text 1"
              className="form input"
              onChange={(e) => {
                setInput1(e.target.value);
              }}
              />
              </div>
              <div>

            <input
              type="text"
              placeholder="text 2"
              className="form input"
              onChange={(e) => {
                setInput2(e.target.value);
              }}
              />
              </div>
              <div>
              <Button variant="success" onClick={(e)=>{exportComponentAsJPEG(memeRef)}}>Save Image</Button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meme;
