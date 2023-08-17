import React, { useState } from "react";
const UserInput = ({ handleInputChange }) => {
  const [username, setUserName] = useState("");

  const handleButtonClicked = () => {
    handleInputChange(username);
  };
  return (
    <div class="flex items-center h-screen w-full justify-center">
      <div class="max-w-xs">
        <div class="bg-white shadow-xl rounded-lg py-3">
          <div class="photo-wrapper p-2">
            <img
              class="w-32 h-32 rounded-full mx-auto"
              src="https://avatars.githubusercontent.com/u/29?v=4"
              alt="John Doe"
            />
          </div>
          <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
              Arun Rajak
            </h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
              <p>React Developer</p>
            </div>
            <form className="flex flex-col justify-center ">
              <label className="mb-2 ">
                <span className="text-sm ml-0.5">Username</span>
              </label>
              <input
                className="border-2 border-sky-600 rounded text-lg"
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              ></input>
            </form>

            <div class="text-center my-3">
              <button
                className="py-2 px-4 bg-sky-500 text-white font-semibold rounded-lg mt-5"
                onClick={handleButtonClicked}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInput;
