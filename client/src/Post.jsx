import React from "react";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";

const Post = ({ title, summary, content, cover, createdAt, author, _id }) => {
  return (
    <Link to={`/post/${_id}`} className="link">
      <div className="post">
        <div className="image">
          <img src={"http://localhost:8000/" + cover} alt="pic" />
        </div>
        <div className="texts">
          <h2>{title}</h2>
          <div className="info">
            <p className="author">{author.name}</p>
            <time>{dateFormat(createdAt, "mmmm dS, yyyy, h:MM TT")}</time>
          </div>
          <p className="summary">{summary}</p>
        </div>
      </div>
    </Link>
  );
};

export default Post;
