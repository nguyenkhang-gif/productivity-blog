import { useEffect, useState } from "react";

export const Pomodoro: React.FC = () => {
  const [count, setCount] = useState(30);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="absolute top-10  flex flex-col items-center max-w-[1228px] w-[80%] mt-[10px] sm:my-[50px] p-10 rounded-lg bg-clip-padding bg-black-400 backdrop-filter backdrop-blur-lg bg-opacity-0 h-auto">
      <h1 className="text-5xl font-bold text-black">Pomodoro</h1>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 24 } as never}></span>
          </span>
          min
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 49 } as never}></span>
          </span>
          sec
        </div>
        {/* Add more items here */}
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
    </div>
  );
};
