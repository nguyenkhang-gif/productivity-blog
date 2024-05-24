import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../../context/authContext";

const useUploadFile = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser, authUser } = useAuthContext();
  const upload = async (file: File | null) => {
    try {
      setLoading(true);
      if (!file) {
        throw new Error("there's no file");
      }

      const formData = new FormData();
      formData.append("filename", file);
      const response = await fetch(`/api/firebase/upload/`, {
        method: "POST",
        body: formData,
      });

      if (response) {
        const data = await response.json();
        console.log(data);
        console.log(authUser);
        setAuthUser({ ...authUser!, profilePic: data.downloadURL });
        localStorage.setItem(
          "chat-user",
          JSON.stringify({ ...authUser!, profilePic: data.downloadURL })
        );
      }

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (e) {
      if (e instanceof Error) {
        toast.error(e.message);
      } else {
        toast.error("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return { upload, loading };
};

export default useUploadFile;
