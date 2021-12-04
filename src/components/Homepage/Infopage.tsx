import React, { useState, useEffect } from "react";
import { Cat } from "../../constants/interfaces";
import { useAppSelector } from "../../redux-store/hooks";
import CatsList from "./CatsList";
import { selectCats } from "./homepageSlice";

interface Props {
  setCatSelected: (cat: Cat | null) => void;
}
const Infopage: React.FC<Props> = ({ setCatSelected }) => {
  const [catsData, setCatsData] = useState([]);
  const catsRecords = useAppSelector(selectCats);

  useEffect(() => {
    setCatsData(catsRecords);
  }, [catsRecords]);

  return (
    <div className="container flex flex-col mx-auto w-full items-center justify-center">
      <ul className="flex flex-col">
        {catsData &&
          catsData?.map((cat: Cat) => (
            <CatsList cat={cat} setCatSelected={setCatSelected} />
          ))}
      </ul>
    </div>
  );
};

export default Infopage;
