import React from "react";
import { useRouter } from "next/router";

const Fetcher = () => {
  const {
    query: { id },
  } = useRouter();
  return (
    <div>
      <span>Haas {id}</span>
    </div>
  );
};

export default Fetcher;
