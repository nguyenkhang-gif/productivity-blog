import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import useStoreChaters from "../../zustand/useStoreChapters.tsx";
import Chapter from "./Chapter.tsx";
import {
  DndContext,
  DragEndEvent,
  MouseSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { verticalListSortingStrategy } from "@dnd-kit/sortable";

// import { ChapterData } from "../../Hooks/useCheerio.tsx";

const Chapters = () => {
  const { chapters, setChapters } = useStoreChaters();
  const sensors = useSensors(
    useSensor(MouseSensor, {
      onActivation: (event) => console.log("onActivation", event), // Here!
      activationConstraint: { distance: 5 },
    })
  );
  const onDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    if (active.id === over?.id) return;
    const oldIndex = chapters.findIndex((chap) => chap.id === active.id);
    const newIndex = chapters.findIndex((chap) => chap.id === over?.id);
    setChapters(arrayMove(chapters, oldIndex, newIndex));
  };

  return (
    // <div className="flex flex-col justify-center items-center gap-2 p-10 min-w-[50vw] overflow-y-scroll">
    <div className="relative flex flex-col items-center gap-2 pl-5 pr-5 min-w-[50vw] overflow-y-scroll">
      <DndContext
        collisionDetection={closestCenter}
        sensors={sensors}
        onDragEnd={onDragEnd}
      >
        {chapters.length > 0 ? (
          <SortableContext
            items={chapters}
            strategy={verticalListSortingStrategy}
          >
            {chapters.map((item, index) => (
              <Chapter
                key={item.id}
                title={item.title}
                item={item}
                index={index + 1}
              />
            ))}
          </SortableContext>
        ) : null}
      </DndContext>
    </div>
  );
};

export default Chapters;
