// import { UniqueIdentifier } from "@dnd-kit/core";
import { ChapterData } from "../../Hooks/useCheerio";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import useStoreChaters from "../../zustand/useStoreChapters";
import { UniqueIdentifier } from "@dnd-kit/core";

interface ChapterProps {
  title: string;
  index: number;
  item: ChapterData;
}

const Chapter = ({ title, index, item }: ChapterProps) => {
  // console.log(item);
  const { chapters, setChapters } = useStoreChaters();
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: item.id,
    });

  const handleOnDelete = (id: UniqueIdentifier) => {
    console.log("dele");

    const Finalist = chapters.filter((chap) => {
      return chap.id != id;
    });
    setChapters(Finalist);
  };
  const style = { transition, transform: CSS.Transform.toString(transform) };
  return (
    <div
      className="navbar bg-base-100 rounded"
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <div className="">
        <a className="btn btn-ghost text-xl">{index}</a>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">{title}</a>
      </div>
      <div className="navbar-end">
        <a
          className="btn"
          onClick={() => {
            // if (e.detail == 2) {
            //   console.log("Double Clicked");
            // }
            handleOnDelete(item.id);
          }}
        >
          Delete
        </a>
      </div>
    </div>
  );
};

export default Chapter;
