import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = ({ username }) => {
  const [user, setUserData] = useState(null);

  useEffect(() => {
    const fatchUserData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}`
        );
        setUserData(response.data);
        console.log(setUserData);
      } catch (error) {
        console.error("Error fatching user data", error);
      }
    };
    fatchUserData();
  }, [username]);

  const FormateDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; //why we add here +1 beacuse monthe index starting 0 to 11
    const year = date.getFullYear();
    return `${year}/${month}/${day}`;
  };

  return (
    <div className="flex items-center h-screen w-full justify-center">
      <div className="max-w-xs bg-white shadow-xl rounded-lg py-3">
        {user ? (
          <div className="bg-white shadow-xl rounded-lg py-3">
            <div className="photo-wrapper p-2">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src={user.avatar_url}
                alt="John Doe"
              />
            </div>
            <div className="p-2">
              <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                {user.name}
              </h3>
              <div className="text-center text-xs text-gray-400  font-semibold">
                <p>Username : {user.login}</p>
              </div>
              <table className="text-xs my-3">
                <tbody>
                  <tr>
                    <td className="px-2 py-2 text-lg text-gray-700 ">
                      No. of public repos :
                    </td>
                    <td className="px-2 py-2 text-lg text-gray-700">{user.public_repos}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-lg text-gray-700 ">
                      No. of public gists :
                    </td>
                    <td className="px-2 py-2 text-lg text-gray-700">{user.public_gists}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-lg text-gray-700 ">
                    Profile created :
                    </td>
                    <td className="px-2 py-2 text-lg text-gray-700">
                    {FormateDate(user.created_at)}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="text-center my-3">
                <button
                  className="py-2 px-4 bg-sky-500 text-white font-semibold rounded-lg mt-5"
                >
                  Follow
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p>User data is loading....</p>
        )}
      </div>
    </div>
  );
};

export default Card;
