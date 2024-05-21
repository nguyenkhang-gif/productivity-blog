import { useState } from "react";
import useCheerio from "../../Hooks/useCheerio.tsx";
import useGetHtml from "../../Hooks/useGetHtml.tsx";
import useStoreChaters from "../../zustand/useStoreChapters.tsx";
import toast from "react-hot-toast";

const UrlInputForm = () => {
  const { loading, getHtml } = useGetHtml();
  const { chapters, setChapters } = useStoreChaters();
  const { toChapter } = useCheerio();
  const [url, setUrl] = useState<string>("");
  const handleGethtml = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: string | undefined = await getHtml(url);
    try {
      if (data) {
        // console.log(toChapter(data));
        if (toChapter(data) !== undefined && toChapter(data).data !== null) {
          setChapters([...chapters, toChapter(data)]);
        }
        setUrl("");
      }
    } catch (err) {
      toast.error("can't find or can't convert try other url");
    }
  };

  return (
    <form
      className="flex justify-center items-center gap-2 min-w-[50vw] m-5  "
      onSubmit={handleGethtml}
    >
      <input
        type="text"
        placeholder="Put your URL here"
        className="input input-bordered input-secondary w-full max-w-xs"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button className="btn btn-active">
        {loading ? <span className="loading loading-spinner"></span> : " Add"}
      </button>
    </form>
  );
};

export default UrlInputForm;
