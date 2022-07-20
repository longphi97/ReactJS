import React from "react";

const withSecretToLife = (WrappedComponent) => {
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
export default withSecretToLife;
