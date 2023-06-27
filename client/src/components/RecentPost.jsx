import { ArrowRightOutlined } from "@ant-design/icons";
import { Card, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import ReadMore from "../../assets/read-more.jpg";
const { Paragraph } = Typography;
const RecentPost = ({ recentPost }) => {
  return (
    <Link to={`/post/${recentPost?._id}`} className="link">
      <div className="recent-post">
        <div className="recent-post-image">
          {recentPost?.cover ? (
            <img
              src={"https://blogify-o1o1.onrender.com/" + recentPost?.cover}
              alt="pic"
            />
          ) : (
            <img src={ReadMore} alt="pic" />
          )}
        </div>
        <div className="recent-post-card">
          <Card>
            <h3 className="recent-post-heading">{recentPost?.title}</h3>
            <Paragraph className="recent-post-summary" ellipsis={{ rows: 2 }}>
              {recentPost?.summary}
            </Paragraph>
            <p className="recent-post-icon">
              <ArrowRightOutlined />
            </p>
          </Card>
        </div>
      </div>
    </Link>
  );
};

export default RecentPost;
