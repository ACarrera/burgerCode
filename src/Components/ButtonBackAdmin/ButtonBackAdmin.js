import React from "react";
import { Link } from "react-router-dom";

const ButtonBackAdmin = () => {
  return (
    <Link to="/admin" className="d-flex justify-content-center my-0 p-1">
      <button className="btn text-success border-0 rounded-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-reply-fill"
          viewBox="0 0 16 16"
        >
          <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
        </svg>
      </button>
    </Link>
  );
};

export default ButtonBackAdmin;
