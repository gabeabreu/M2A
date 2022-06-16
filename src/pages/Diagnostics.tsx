import React from "react";
import { Link } from "react-router-dom";

function Diagnostics() {
  return (
    <div className="flex flex-col bg-gray-400 h-screen w-screen justify-center items-center">
      <p className="text-white text-2xl">Diagnostics</p>
      <Link to="/">
        <p className="text-blue-900 text-xl">{`<- go back`}</p>
      </Link>
    </div>
  );
}

export default Diagnostics;
