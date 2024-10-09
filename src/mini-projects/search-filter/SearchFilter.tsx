import { useCallback, useState } from "react";
import Search from "./Search";
import { shuffleArray } from "../../utils/shuffleArray";

const allUsers = ["Shubham", "Rohit", "Raj", "Rajesh", "Shivam"];

const SearchFilter = () => {
  const [userName, setuserName] = useState(allUsers);
console.log(userName[0]);
  const handleSearch = useCallback((text: string) => {
    const filteredUsers = allUsers.filter((user) =>
      user.toLowerCase().includes(text.toLowerCase())
    );
    setuserName(filteredUsers);
  },[userName])

  return (
    <>
      <div className="min-h-screen bg-stone-800 flex  flex-col items-center justify-start ">
        <div className="flex flex-col  mt-10">
          <div className="flex justify-center align-top gap-4">
            <button
              onClick={() => {
                setuserName(shuffleArray(allUsers));
              }}
              className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded"
            >
              Shuffle
            </button>
            <Search onChange={handleSearch} />
          </div>
          <div className="display-user flex flex-col mt-4 gap-4 items-start">
            <ol className="list-decimal pl-8">
              {userName.map((user) => (
                <li className="text-xl text-white text-left" key={user}>
                  {user}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchFilter;
