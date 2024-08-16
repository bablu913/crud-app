import React from "react";
import { ErrorBoundary } from "react-error-boundary";
const Bad1 = () => {
  return {
    oops: "this is not good.",
  };
};

const ErrorFallback = ({error}) => {
    return <>
        <h3>Something went wrong: {error.message}</h3>
    </>
}

const Bad2 = () => {
  return (
    <>
      <h1>from Bad2 component</h1>
      <Bad1 />
    </>
  );
};
const BadComponent = () => {
  return (
    <div>
      <h1>From Some Component</h1>
      <Bad2 />
      <ErrorFallback/>
    </div>
  );
};

export default BadComponent;