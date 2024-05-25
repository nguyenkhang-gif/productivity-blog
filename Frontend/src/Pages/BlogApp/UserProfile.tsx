// import { useAuthContext } from "../../context/authContext";

import { useState } from "react";
import useUploadFile from "../../Hooks/Blogs/useUploadFile";
import { useAuthContext } from "../../context/authContext";

// import toast from "react-hot-toast";

const UserProfile = () => {
  const { authUser } = useAuthContext();

  return (
    <div className=" flex flex-col items-center phone-3 bg-base-100 rounded p-5 mx-3 ">
      <div className="avatar  cursor-pointer transition-transform duration-300 hover:scale-105  dropdown dropdown-center">
        <div
          className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 m-1"
          tabIndex={0}
          role="button"
        >
          <img
            src={
              authUser
                ? authUser.profilePic
                : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            }
          />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <FileUploadWindow />
          </li>
        </ul>
      </div>
      <a className="btn btn-ghost text-xl">{authUser?.fullName}</a>
    </div>
  );
};

const FileUploadWindow = () => {
  const openModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
    modal?.showModal();

    // } else {
    //   toast.error("No Chapter yet");
    // }
  };
  const { upload, loading } = useUploadFile();
  const [file, setFile] = useState<File | null>(null);

  const handleUploadFile = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    await upload(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) setFile(e.target.files[0]);
  };
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button className="btn" onClick={openModal}>
        Updated pic
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex flex-col items-center">
          <h3 className="font-bold text-lg">Updated your profile pic!</h3>
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <div className="modal-action">
              <form method="dialog" className="flex flex-col items-center">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="file-input w-full max-w-xs"
                />
                {/* if there is a button in form, it will close the modal */}
                <div className="mt-5">
                  <button className="btn m-5" onClick={handleUploadFile}>
                    Save
                  </button>
                  <button className="btn">Cancel</button>
                </div>
              </form>
            </div>
          )}
        </div>
      </dialog>
    </div>
  );
};

export default UserProfile;
