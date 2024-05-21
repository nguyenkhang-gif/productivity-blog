import { useState } from "react";

import useStoreChaters from "../zustand/useStoreChapters";
import toast from "react-hot-toast";

const useEpubGen = () => {
  const [loading, setLoading] = useState(false);
  const { chapters, lightnovelInfo } = useStoreChaters();
  const genEpub = async () => {
    try {
      // Your HTML content here
      setLoading(true);
      const response = await fetch("/api/epub/gen-epub", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ chapters, lightnovelInfo }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate EPUB");
      }

      const blob = await response.blob();
      console.log(blob);
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        `${lightnovelInfo.title ? lightnovelInfo.title : "my-ebook"}.epub`
      );
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      console.error(err);
      toast.error("error when gen epub");
    } finally {
      setLoading(false);
    }
  };
  return { chapters, genEpub, loading };
};

export default useEpubGen;
