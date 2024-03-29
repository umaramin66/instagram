import React from "react";
import "./home.css";

function Suggestion() {
  return (
    <div className="mt-10">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <a href="" className="d-flex align-items-center">
            <img
              src="https://i.imgur.com/ARMxyC4.jpg"
              alt="avatar"
              className="bigavatar"
            />
            &nbsp;
            <div className="ml-1" style={{ transform: "translateY(-2px)" }}>
              <span className="d-blok">Leo</span>
            </div>
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center my-8">
        <h6 className="text-secondary suggestnbtn">suggestions for you</h6>
        <i className="fa fa-redo" style={{ cursor: "pointer" }}></i>
      </div>
      <div className="suggestions">
        <div className="d-flex justify-content-between ">
          <div>
            <a href="d-flex align-items-center">
              <img
                className="sug_avatar"
                src="https://i.imgur.com/QpUEcfi.jpg"
                alt="avatarsug"
              />
              &nbsp;
              <div className="ml-1" style={{ transform: "translateY(-2px)" }}>
                <span className="d-blok">Leo</span>
              </div>
            </a>
          </div>
          <button style={{ margin: "10px" }} className="sug_followbtn">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default Suggestion;
