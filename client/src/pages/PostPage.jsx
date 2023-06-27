import React, { useEffect } from "react";
import dateFormat from "dateformat";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletePost, getPost, reset } from "../redux/post/postSlice";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import { Divider } from "antd";

const PostPage = () => {
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { post, isLoading, isError, isDelete, message } = useSelector(
    (state) => state.posts
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isDelete) {
      navigate("/");
    }
    dispatch(getPost(id));
    return () => {
      dispatch(reset());
    };
  }, [isDelete]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="post-page">
      <h1 className="post-title">{post?.title}</h1>

      <h3 className="post-summary">{post?.summary}</h3>
      <time className="post-time">
        {dateFormat(post?.createdAt, "mmmm dS, yyyy, h:MM TT")}
      </time>

      <div className="author">{post?.author?.name}</div>
      {user?.id === post?.author?._id && (
        <div className="actions-buttons">
          <div className="edit-row">
            <Link
              className="edit-btn button-class"
              to={`/post/edit/${post._id}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              Edit this post
            </Link>
          </div>
          <div className="delete-row">
            <button
              className="delete-btn button-class"
              i
              onClick={() => dispatch(deletePost(id))}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                  clip-rule="evenodd"
                />
              </svg>
              Delete this post
            </button>
          </div>
        </div>
      )}
      <div className="image">
        {post?.cover ? (
          <img src={"https://blogify-o1o1.onrender.com/" + post.cover} alt="" />
        ) : (
          <>
            <Divider />
            <Divider />
          </>
        )}
      </div>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

export default PostPage;
