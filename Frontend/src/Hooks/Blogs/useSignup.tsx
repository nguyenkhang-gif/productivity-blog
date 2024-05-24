import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../../context/authContext";
interface userTypes {
  fullName: string;
  username: string;
  password: string;
  confirmPassword: string;
  gender: string;
}
const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }: userTypes) => {
    const success = handleInputError({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;
    setLoading(true);

    try {
      const res = await fetch(`/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }
      // localstorage
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
      // context
      //   setAuthUser(data);
      //   console.log(data);
    } catch (e) {
      if (e instanceof Error) {
        toast.error(e.message);
      } else {
        toast.error("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
    // context
    // setAuthUser(data);
  };
  return { loading, signup };
};

export default useSignup;

const handleInputError = ({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}: userTypes) => {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill all field");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Password need to be match");
    return false;
  }

  if (password.length < 6) {
    toast.error(`Password must be at least 6 characters`);
    return false;
  }

  return true;
};
