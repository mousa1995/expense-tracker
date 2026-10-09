import { type CSSProperties } from "react";

const css: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  backgroundColor: "rgba(0,0,0,0.2)",
  minHeight: "100vh",
  minWidth: "100%",
  zIndex: 999,
  inset: 0,
};

const IsLoading = () => {
  return (
    <>
      <div style={css}>is Loading</div>
    </>
  );
};

export default IsLoading;
