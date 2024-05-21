import React from "react";

import useStoreChaters from "../../zustand/useStoreChapters.tsx";
import useEpubGen from "../../Hooks/useEpubGen.tsx";
import toast from "react-hot-toast";

const BottomNav = () => {
  return (
    <div className="mt-auto">
      {/* <button
        className="btn btn-outline btn-info"
        onClick={() => {
          // genEpub();
        }}
      >
        Genergate Epub
      </button> */}
      <ConfirmOrderModel />
    </div>
  );
};

const ConfirmOrderModel: React.FC = () => {
  const { lightnovelInfo, setLightnovelInfo, chapters } = useStoreChaters();

  const { genEpub } = useEpubGen();
  const openModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (chapters.length > 0) {
      const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
      modal?.showModal();
    } else {
      toast.error("No Chapter yet");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(lightnovelInfo);
    await genEpub();
  };

  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button className="btn btn-outline btn-info" onClick={openModal}>
        Create
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">
            Fill in some info about the book
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="text"
              placeholder="Title here"
              className="input input-bordered w-full max-w-xs m-5"
              value={lightnovelInfo.title ? lightnovelInfo.title : ""}
              onChange={(e) => {
                setLightnovelInfo({
                  ...lightnovelInfo,
                  title: e.target.value,
                });
              }}
            />
            <input
              type="text"
              placeholder="Author"
              className="input input-bordered w-full max-w-xs m-5"
              value={lightnovelInfo.author ? lightnovelInfo.author : ""}
              onChange={(e) => {
                setLightnovelInfo({
                  ...lightnovelInfo,
                  author: e.target.value,
                });
              }}
            />

            <button className="btn btn-active">Create</button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default BottomNav;
