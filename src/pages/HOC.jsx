import React from "react";

function withStyles(Component) {
  return (props) => {
    const style = {
      padding: "0.2rem",
      backgroundColor: "red",
    };
    return <Component style={style} {...props} />;
  };
}

const Text = (props) => <p style={props.style}>Test</p>;

const StyledText = withStyles(Text);

function HOC() {
  return (
    <div>
      <StyledText />
    </div>
  );
}

export default HOC;
