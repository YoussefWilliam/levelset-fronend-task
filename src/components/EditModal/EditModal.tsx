import React from "react";
import { Cat } from "../../constants/interfaces";

interface Props {
  cat: Cat;
  setCatInfo: any;
}
const EditModal: React.FC<Props> = ({ cat, setCatInfo }) => {
  const { name, image, ownerName, birthdate } = cat || {};

  return (
    <div>
      <label className="text-gray-700">Image URL</label>
      <input
        type="text"
        id="name-with-label"
        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        defaultValue={image}
        placeholder="Add image link"
        onChange={(e) => {
          e.preventDefault();
          setCatInfo({
            ...cat,
            image: e.target.value,
          });
        }}
      />
      <label className="text-gray-700">Cat's Name</label>
      <input
        type="text"
        id="name-with-label"
        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        defaultValue={name}
        placeholder="Add cat's name"
        onChange={(e) => {
          e.preventDefault();
          setCatInfo({
            ...cat,
            name: e.target.value,
          });
        }}
      />
      <label className="text-gray-700">Owner's name</label>
      <input
        type="text"
        id="name-with-label"
        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        defaultValue={ownerName}
        placeholder="Add owner's name"
        onChange={(e) => {
          e.preventDefault();
          setCatInfo({
            ...cat,
            ownerName: e.target.value,
          });
        }}
      />
      <label className="text-gray-700">Cat's Birthday</label>
      <input
        type="text"
        id="name-with-label"
        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        defaultValue={birthdate}
        placeholder="Add birthday in YYYY-MM-DD format"
        onChange={(e) => {
          e.preventDefault();
          setCatInfo({
            ...cat,
            birthdate: e.target.value,
          });
        }}
      />
    </div>
  );
};

export default EditModal;
