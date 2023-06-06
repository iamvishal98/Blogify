import React from "react";

const Post = () => {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_IO_Bard_Keyword_Header_Op.width-1600.format-webp.webp"
          alt="pic"
        />
      </div>
      <div className="texts">
        <h2>
          {" "}
          What’s ahead for Bard: More global, more visual, more integrated
        </h2>
        <p className="info">
          <a className="author">Vishal</a>
          <time>2023-06-01 16:45</time>
        </p>
        <p className="summary">
          Today, we’re introducing new updates to Bard, including image
          capabilities, coding features and app integration. Plus, we’re
          expanding access around the world, including India, introducing more
          languages and ending the waitlist.
        </p>
      </div>
    </div>
  );
};

export default Post;
