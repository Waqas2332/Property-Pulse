"use client";

const override = {
  display: "block",
  margin: "100px auto",
};

import { ClipLoader } from "react-spinners";
const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      cssOverride={override}
      size={150}
      color="#3b82f6"
      loading={loading}
    />
  );
};

export default Spinner;
