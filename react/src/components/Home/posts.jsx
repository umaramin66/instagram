import React from "react";
import "./home.css";

function Posts() {
  return (
    <div className="post-list">
      <div className="post">
        <div className="p_d">
          <div className="p_inner">
            <img className="p_p" src="https://i.imgur.com/QpUEcfi.jpg" alt="" />
            <a href="">
              <p className="p_name">Layd</p>
            </a>
          </div>
          <i className="fas fa-ellipsis-h threedots"></i>
        </div>
        <div className="p_image">
          <img
            className="pp_full"
            src="https://i.imgur.com/ARMxyC4.jpg"
            alt="post"
          />
        </div>
        <div className="reaction_icon">
          <div className="left_i">
            <button className="reactionbtn">
              <i
                className="fa fa-heart hearticon"
                style={{ fontsize: "22px" }}
              ></i>
            </button>
            <button className="reactionbtn">
              <img src="https://i.imgur.com/QpUEcfi.jpg" alt="" />
            </button>
            {/* <button className="reactionbtn">
              <img src="https://i.imgur.com/ARMxyC4.jpg" alt="" />
            </button> */}
          </div>
          <div className="right_i">
            <button className="reactionbtn">
              <i className="fa fa-bookmark" style={{ fontsize: "22px" }}></i>
            </button>
          </div>
        </div>
        <h6 className="numlikes">I likes</h6>
        <span className="posttitle">nature</span>
        <span className="postbody">lovely nature</span>
        <br />
        <button className="btn viewcommentbtn" type="button">
          view all comments
        </button>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h6>
            <a href="" className="comment">
              <img
                src="https://i.imgur.com/ARMxyC4.jpg"
                alt=""
                className="commentview"
              />
              <span style={{ fontWeight: "400" }}>jeo</span>
            </a>
            &nbsp; Nice!!
          </h6>
        </div>
        {/* <p className="postdate">
          {timesince(newdate())}

        </p> */}
        <div className="comment_section">
          <div className="input_box">
            <img src="https://i.imgur.com/ARMxyC4.jpg" alt="" />
            <input
              type="text"
              className="input_c"
              placeholder="add a comment..."
            />
          </div>
          <div>
            <button className="c_text">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
