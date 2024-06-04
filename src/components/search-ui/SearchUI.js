import React, { useEffect, useState } from "react";

const SearchUI = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = async () => {
    if (cache[searchText]) {
      setSearchResults(cache[searchText]);
    } else {
      const res = await fetch(
        `https://www.google.com/complete/search?client=firefox&q=${searchText}`
      );
      const json = await res.json();
      setSearchResults(json[1]);
      console.log(json[1]);
      cache[searchText] = json[1];
      setSearchResults(json[1]);
    }
  };

  useEffect(() => {
    const search = setTimeout(() => {
      fetchData();
    }, 500);
    return () => clearTimeout(search);
  }, [searchText]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div className="m-10">
      <input
        type="search"
        className="border border-black p-2 w-96"
        value={searchText}
        onChange={handleChange}
        onFocus={() => setIsResultVisible(true)}
        onBlur={() => setIsResultVisible(false)}
      />
      {searchResults.length > 1 && isResultVisible && (
        <ul className="p-2 border border-black w-96">
          {searchResults?.map((result) => (
            <li className="cursor-pointer hover:bg-gray-100">{`🔍${result}`}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchUI;
