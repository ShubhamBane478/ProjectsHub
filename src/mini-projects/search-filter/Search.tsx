import { memo } from "react";

interface SearchProps {
  onChange: (text: string) => void;
}
const Search = ({ onChange } :SearchProps) => {
  console.log("Search Render");
  return (
    <>
      <input
        type="text"
        className="border border-gray-300 rounded-lg py-2 px-4 mr-2"
        placeholder="Search users..."
        onChange={(e) =>onChange(e.target.value)}
      />
    </>
  );
};

export default memo(Search);
