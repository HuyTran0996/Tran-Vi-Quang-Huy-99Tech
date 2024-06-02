import React from "react";
import "./Error.scss";

const Loading = () => {
  return (
    <div className="error-center">
      <div className="ring"></div>
      <div className="error-message-container">
        <span>Error</span>
        <span>please come back later!</span>
      </div>
    </div>
  );
};

export default Loading;
