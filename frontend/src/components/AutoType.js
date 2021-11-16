import React from "react";
// Can also be included with a regular script tag
import Typed from "typed.js";

const AutoType = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        "MERN Stack Developer",
        "Backend Developer",
        "Frontend Developer",
        "Technical Writer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
    typed.current.start();
  }, []);
  return (
    // <div>
    //   <div className="auto-type-section">
    //     <div className="auto-type-content">
    //       <strong>
    //         I am a <span>MERN Stack Developer</span>
    //       </strong>
    //     </div>
    //   </div>
    // </div>
    <div className="wrap">
      <div className="type-wrap" style={{ color: "white" }}>
        <div className="auto-type-content">
          <strong>
            I am <strong style={{ fontWeight: "bolder" }}>Theodore</strong> and
            a
          </strong>
        </div>
        <span style={{ whiteSpace: "pre", fontWeight: "bolder" }} ref={el} />
      </div>

      {/* <button onClick={() => typed.current.toggle()}>Toggle</button>
      <button onClick={() => }>Start</button>
      <button onClick={() => typed.current.stop()}>Stop</button>
      <button onClick={() => typed.current.reset()}>Reset</button>
      <button onClick={() => typed.current.destroy()}>Destroy</button> */}
    </div>
  );
};

export default AutoType;
