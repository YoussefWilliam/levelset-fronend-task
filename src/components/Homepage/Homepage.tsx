import React, { useState } from "react";
import { Cat } from "../../constants/interfaces";
import Example from "../EditModal/Modal";
import CatDetailspage from "./CatDetailspage";
import Infopage from "./Infopage";

const Homepage: React.FC = () => {
  const [catSelected, setCatSelected] = useState<Cat | null>(null);
  return (
    <div className="grid grid-cols-3 gap-4 divide-x">
      <div className="p-8 h-screen">
        <Infopage setCatSelected={setCatSelected} />
      </div>
      <div className="col-span-2 p-8 bg-gray-200">
        <CatDetailspage cat={catSelected} setCatSelected={setCatSelected} />
      </div>
    </div>
  );
};

export default Homepage;
