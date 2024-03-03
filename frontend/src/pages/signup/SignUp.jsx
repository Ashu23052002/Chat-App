import React from "react";
import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 ex-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-white-900 bg-clip-padding backdrop-filter backdrop-blur-xl bg-capacity-100">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          <span className="text-blue-500">Chit-Chat</span>
        </h1>

        <form>
          {/*  fullname */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">FullName</span>
            </label>
            <input
              type="text"
              placeholder="Enter Fullname"
              className="w-full input input-bordered h-10"
            />
          </div>

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

          {/* confirm password */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="text"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <GenderCheckbox />

          <a
            href="#"
            className="text-sm hover:underline hover:text-red-600 mt-2 inline-block"
          >
            Already have a account ?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2">SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
