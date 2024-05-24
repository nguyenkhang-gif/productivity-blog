import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../../context/authContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const login = async (username: string, password: string) => {
    const success = handleInputError(username, password);
    if (!success) return;
    try {
      setLoading(true);
      const res = await fetch(`/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
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

  return { loading, login };
};

const handleInputError = (username: string, password: string): boolean => {
  if (!username || !password) {
    toast.error("Please fill all field");
    return false;
  }

  if (password.length < 6) {
    toast.error(`Password must be at least 6 characters`);
    return false;
  }

  return true;
};

export default useLogin;
