import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import useLogout from "../../Hooks/Blogs/useLogout";

const TopNav = () => {
  const { authUser } = useAuthContext();
  const { logout } = useLogout();
  // console.log(authUser);

  const handleLogout = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    await logout();
  };

  return (
    <div className="navbar bg-base-100 fixed top-0 left-0 w-full z-50">
      <div className="flex-1">
        <Link to="/">
          <a className="btn btn-ghost text-xl">RandomBlog</a>
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="flex-none">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              App
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/epubgen"}>Epub Gen</Link>
              </li>
              <li>
                <Link to={"/BlogApp"}>Blogs</Link>
              </li>
              <li>
                <Link to={"/Pomodoro"}>Pomodoro</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={
                  authUser?.profilePic ||
                  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                }
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            {authUser && (
              <li>
                <Link to={"/myprofile"} className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
            )}

            <li>
              {authUser ? (
                <a onClick={handleLogout}>Logout</a>
              ) : (
                <Link to={"/login"}>Login</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNav;

// start er code
// import React from "react";
// import { Link } from "react-router-dom";

// const TopNav = () => {
//   return (
//     <div className="navbar bg-base-100 fixed top-0 left-0 w-full z-50">
//       <div className="flex-1">
//         <Link to="/">
//           <a className="btn btn-ghost text-xl">RandomBlog</a>
//         </Link>
//       </div>
//       <div className="flex-none gap-2">
//         <div className="flex-none">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn m-1">
//               App
//             </div>
//             <ul
//               tabIndex={0}
//               className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
//             >
//               <li>
//                 <Link to={"/"}>Home</Link>
//               </li>
//               <li>
//                 <Link to={"/epubgen"}>Epub Gen</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="form-control">
//           <input
//             type="text"
//             placeholder="Search"
//             className="input input-bordered w-24 md:w-auto"
//           />
//         </div>
//         <div className="dropdown dropdown-end">
//           <div
//             tabIndex={0}
//             role="button"
//             className="btn btn-ghost btn-circle avatar"
//           >
//             <div className="w-10 rounded-full">
//               <img
//                 alt="Tailwind CSS Navbar component"
//                 src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
//               />
//             </div>
//           </div>
//           <ul
//             tabIndex={0}
//             className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
//           >
//             <li>
//               <a className="justify-between">
//                 Profile
//                 <span className="badge">New</span>
//               </a>
//             </li>
//             <li>
//               <a>Settings</a>
//             </li>
//             <li>
//               <a>Logout</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopNav;
