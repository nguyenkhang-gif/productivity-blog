import toast from "react-hot-toast";
import useSignup from "../../Hooks/Blogs/useSignup.tsx";
import GenderCheckbox from "./GenderCheckbox.tsx";

import { useState } from "react";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading } = useSignup();

  const handleCheckboxChange = (gender: string) => {
    setInputs({ ...inputs, gender: gender });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.error("Tính năng chưa được update!");
    // await signup(inputs);
  };
  return (
    <div className="flex flex-col item-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup
          <span className="text-blue-500">Blogs</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John sthng "
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) => {
                setInputs({
                  ...inputs,
                  fullName: e.target.value,
                });
              }}
            />
          </div>
          {/* ==========END OF FullName========= */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) => {
                setInputs({
                  ...inputs,
                  username: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) => {
                setInputs({
                  ...inputs,
                  password: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) => {
                setInputs({
                  ...inputs,
                  confirmPassword: e.target.value,
                });
              }}
            />
          </div>
          {/* CheckBox here */}

          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have a account?
          </a>
          <div>
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              <button className="btn btn-block btn-sm mt-2 " type="submit">
                SignUp
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
