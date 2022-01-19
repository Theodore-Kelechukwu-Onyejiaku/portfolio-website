import React, { useEffect } from "react";

const scrollAction = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const ScrollTop = () => {
  useEffect(() => {}, []);
  return (
    <button class="scrollup" onClick={scrollAction}>
      <i className="fa fa-angle-up"></i>
    </button>
  );
};

export default ScrollTop;
