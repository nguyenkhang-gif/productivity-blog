import useStoreChaters from "../../zustand/useStoreChapters";
import Chapter from "./Chapter.tsx";

const Chapters = () => {
  const { chapters } = useStoreChaters();
  console.log(chapters);

  return (
    // <div className="flex flex-col justify-center items-center gap-2 p-10 min-w-[50vw] overflow-y-scroll">
    <div className="relative flex flex-col items-center gap-2 pl-5 pr-5 min-w-[50vw] overflow-y-scroll">
      {chapters.length > 0
        ? chapters.map((item, index) => (
            <Chapter key={index} title={item.title} index={index + 1} />
          ))
        : null}
    </div>
  );
};

export default Chapters;
