interface ChapterProps {
  title: string;
  index: number;
}

const Chapter = ({ title, index }: ChapterProps) => {
  return (
    <div className="navbar bg-base-100 rounded">
      <div className="">
        <a className="btn btn-ghost text-xl">{index}</a>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">{title}</a>
      </div>
      <div className="navbar-end">
        <a className="btn">Delete</a>
      </div>
    </div>
  );
};

export default Chapter;
