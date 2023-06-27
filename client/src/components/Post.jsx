import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Typography } from "antd";

const { Paragraph } = Typography;

const Post = ({ title, cover, author, _id }) => {
  return (
    <Col sm={24} md={24} lg={8} xl={6}>
      <Card hoverable className="post-card">
        <Link to={`/post/${_id}`} className="link">
          <p className="post-card-author-name">
            By <span>{author.name}</span>
          </p>
          <Paragraph ellipsis={{ rows: 2 }} className="post-card-title">
            {title}
          </Paragraph>
          <div className="post-card-image">
            {cover ? (
              <img
                src={`${import.meta.env.VITE_BASE_URL}/` + cover}
                alt="pic"
              />
            ) : (
              ""
            )}
          </div>
        </Link>
      </Card>
    </Col>
  );
};

export default Post;
