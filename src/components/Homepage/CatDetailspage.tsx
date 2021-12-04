import React, { useState } from "react";
import { Cat } from "../../constants/interfaces";
import { useAppDispatch } from "../../redux-store/hooks";
import DeleteModal from "../EditModal/DeleteModal";
import EditModal from "../EditModal/EditModal";
import ModalComponent from "../EditModal/Modal";
import { updateCat, deleteCat } from "./homepageSlice";

interface Props {
  cat: Cat | null;
  setCatSelected: any;
}
const CatDetailspage: React.FC<Props> = ({ cat, setCatSelected }) => {
  const { id, name, image, ownerName, birthdate, viewCount } = cat || {};
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState<boolean>(false);
  const [modalBody, setModalBody] = useState<any>(null);
  const [modalType, setModalType] = useState("edit");
  const [updatedCat, setUpdatedCat] = useState<Cat | null>(cat);

  const handleOnUpdateCat = () => {
    dispatch(updateCat(updatedCat));
    setCatSelected(null);
  };

  const handleDeleteCat = () => {
    dispatch(deleteCat(cat));
    setCatSelected(null);
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      {cat ? (
        <>
          <ModalComponent
            open={open}
            setOpen={setOpen}
            body={modalBody}
            kind={modalType}
            handleOnClickingBtn={
              modalType === "edit" ? handleOnUpdateCat : handleDeleteCat
            }
          />
          <div key={id}>
            <div className="text-center mb-4 opacity-90">
              <img
                alt="cat-profile"
                src={image}
                className="mx-auto object-cover rounded-full h-40 w-40 "
              />
            </div>
            <div className="text-center">
              <p className="text-2xl text-gray-800">{name}</p>
              <p className="text-xl text-gray-500 font-light">{birthdate}</p>
              <p className="text-md text-gray-500 py-4 font-light">
                Owner's name: {ownerName}
              </p>
              <p className="text-md text-gray-500 py-4 font-light">
                Number of views: {viewCount}
              </p>
            </div>
          </div>

          <footer className="w-full h-24 ">
            <div className="flex justify-between px-4">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(true);
                  setModalType("delete");
                  setModalBody(<DeleteModal />);
                }}
                type="button"
                className="py-2 px-4  bg-red-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
              >
                Delete
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(true);
                  setModalType("edit");
                  setModalBody(
                    <EditModal cat={cat} setCatInfo={setUpdatedCat} />
                  );
                }}
                className="py-2 px-4  bg-green-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
              >
                Edit
              </button>
            </div>
          </footer>
        </>
      ) : (
        <h1>Select a cat first to show it's data</h1>
      )}
    </div>
  );
};

export default CatDetailspage;
