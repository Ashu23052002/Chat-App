import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 ex-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-white-900 bg-clip-padding backdrop-filter backdrop-blur-xl bg-capacity-100">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          <span className="text-blue-500">Chit-Chat</span>
        </h1>

        <form>
          {/*  username */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
            />
          </div>

          {/* password */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-red-600 mt-2 inline-block"
          >
            Don't have a account ?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// STARTER PACK FOR PAGES

// import React from "react";

// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 ex-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-white-900 bg-clip-padding backdrop-filter backdrop-blur-xl bg-capacity-100">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           <span className="text-blue-500">Chit-Chat</span>
//         </h1>

//         <form>
//           {/*  username */}
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Username"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           {/* password */}
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           <a
//             href="#"
//             className="text-sm hover:underline hover:text-red-600 mt-2 inline-block"
//           >
//             Don't have a account ?
//           </a>
//           <div>
//             <button className="btn btn-block btn-sm mt-2">Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
// /* h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-100 border border-gray-100 */
// export default Login;
