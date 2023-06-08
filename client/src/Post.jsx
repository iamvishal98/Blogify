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
          <p className="info">
            <a className="author">{author.name}</a>
            <time>{dateFormat(createdAt, "mmmm dS, yyyy, h:MM TT")}</time>
          </p>
          <p className="summary">{summary}</p>
        </div>
      </div>
    </Link>
  );
};

export default Post;
