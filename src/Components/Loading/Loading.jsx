import React from "react";
import "../../assets/Css/loading.css";
const Loading = () => {
  return (
    <div className="loading-center">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
