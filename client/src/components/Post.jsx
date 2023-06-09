import React from "react";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";

const Post = ({ title, summary, content, cover, createdAt, author, _id }) => {
  return (
    <Link to={`/post/${_id}`} className="link">
      <div className="post">
        <div className="image">
          {cover ? (
            <img src={"http://localhost:8000/" + cover} alt="pic" />
          ) : (
            <img
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              alt="pic"
            />
          )}
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
