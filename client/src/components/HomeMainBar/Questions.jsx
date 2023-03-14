import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "./HomeMainBar.css";
const Questions = ({ question }) => {
  return (
    <div className="display-question-container">
      <div className="display-votes-ans">
        <p>{question.upVote.length - question.downVote.length}</p>
        <p>votes</p>
      </div>
      <div className="display-votes-ans">
        <p>{question.noOfAnswers}</p>
        <p>answers</p>
      </div>
      <div className="display-question-details">
        <Link to={`/Questions/${question._id}`} className="question-title-link">
          {question.questionTitle}
        </Link>
        <div className="display-tags-time">
          <div className="display-tags">
            {question.questionTags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
            <p
              className="display-time"
              style={{
                fontSize: "15px",
                padding: "5px",
                color: "black",
                backgroundColor: "transparent",
                position: "absolute",
                right: "35%",
              }}
            >
              asked {moment(question.askedOn).fromNow()} {question.userPosted}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
