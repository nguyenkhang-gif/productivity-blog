import { useState } from "react";
import toast from "react-hot-toast";

const useGetHtml = () => {
  const [loading, setLoading] = useState(false);

  const getHtml = async (url: string) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/epub/fetch-html`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          item: {
            url,
          },
        }),
      });
      // console.log(response);

      if (!response.ok) {
        throw new Error("Network response was not ok" + response.statusText);
      }
      const data = await response.text(); // or use .json() if the response is JSON
      return data;
    } catch (err) {
      console.log(err);
      toast.error("url not right or cant read that url");
    } finally {
      setLoading(false);
    }
  };
  return { loading, getHtml };
};

export default useGetHtml;
