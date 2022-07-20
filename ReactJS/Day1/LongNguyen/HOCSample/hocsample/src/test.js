import React from "react";
const withSecretTolife = (WrappedComponent) => {
    function HOC(props) {
    return (
     <WrappedComponent
       {...props}
       number={20}
     />
    );
  }
  return HOC;
  }
  
const DisplayPaper = props => (
    <div>
        The number in the page is {props.number}
    </div>
)
const WrappedComponent = withSecretTolife(DisplayPaper);
export default WrappedComponent;


