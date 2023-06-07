import React from "react";
import dateFormat, { masks } from "dateformat";
import { Link } from "react-router-dom";

const Post = ({ title, summary, content, cover, createdAt, author, _id }) => {
  return (
    <div className="post">
      <Link to={`/post/${_id}`}>
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
      </Link>
    </div>
  );
};

export default Post;
