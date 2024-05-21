import UrlInputForm from "../../components/EpubGenergator/UrlInputForm.tsx";
import Chapters from "../../components/EpubGenergator/Chapters.tsx";
import BottomNav from "../../components/EpubGenergator/BottomNav.tsx";
import { useEffect } from "react";
import useStoreChaters from "../../zustand/useStoreChapters.tsx";
// import BottomNav from "./BottomNav.tsx";

const EpubGenerator = () => {
  const { setChapters, setLightnovelInfo } = useStoreChaters();

  useEffect(() => {
    return () => {
      setChapters([]), setLightnovelInfo({ title: null, author: null });
    };
  }, [setChapters, setLightnovelInfo]);
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-clip-padding bg-black-400 backdrop-filter backdrop-blur-lg bg-opacity-0 flex-col items-center">
      {/* title */}
      <h1 className="text-5xl font-bold text-black">Docln Converter</h1>
      <UrlInputForm />
      {/* list oof chapters */}
      <Chapters />
      <BottomNav />
    </div>
  );
};

export default EpubGenerator;
