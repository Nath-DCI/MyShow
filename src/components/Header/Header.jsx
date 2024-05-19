import "../../styles/Header.css";
import { Input } from "./Input";
import { LogInButton } from "./LogInButton";
import { SearchingResult } from "./SearchingResult";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  return (
    <div className="header">
      <Link to="/">
        <h1>My Show</h1>
      </Link>
      <div className='back-container'>
      <div
        className="back-button"
        onClick={() => {
          window.history.back();
        }}
      >
        Back
        </div>
      </div>
      <Input
        setSearchResults={setSearchResults}
        isDropDown={isDropDown}
        setIsDropDown={setIsDropDown}
      />
      <div className="log-container">
        <LogInButton />
      </div>
    
      {isDropDown && (
        <div className="dropdown">
          <SearchingResult
            searchResults={searchResults}
            setIsDropDown={setIsDropDown}
          />
        </div>
      )}
    </div>
  );
};
