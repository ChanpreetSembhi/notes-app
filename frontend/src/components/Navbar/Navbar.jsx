import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileInfo from "../Cards/ProfileInfo";
import SearchBar from "../SearchBar/SearchBar";
import Logo from "../../assets/logo.jpg";

const Navbar = ({ userInfo, onSearchNote, handleClearSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleSearch = () => {
    if (searchQuery) {
      onSearchNote(searchQuery);
    }
  };

  const onClearSearch = () => {
    setSearchQuery("");
    handleClearSearch();
  };

  return (
    <div className="bg-white flex flex-col md:flex-row space-y-3 md:space-y-0 items-center justify-between px-6 py-3 drop-shadow w-full">
      {/* Mobile View */}
      <div className="flex items-center justify-between w-full md:hidden">
        <div className="flex items-center gap-2 order-1">
          <img src={Logo} alt="logo" className="size-12" />
          <h2 className="text-xl font-bold text-black py-2">
            VerveBridge{" "}
            <span className="font-medium text-lg text-blue-600">Notes app</span>
          </h2>
        </div>
        <ProfileInfo userInfo={userInfo} onLogout={onLogout} className={"order-1"} />
      </div>
      <div className="md:flex items-center gap-2 order-1 hidden">
        <img src={Logo} alt="logo" className="size-12" />
        <h2 className="text-xl font-bold text-black py-2">
          VerveBridge{" "}
          <span className="font-medium text-lg text-blue-600">Notes app</span>
        </h2>
      </div>
      <SearchBar
        value={searchQuery}
        onChange={({ target }) => {
          setSearchQuery(target.value);
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
        className={"order-2"}
      />
      <ProfileInfo userInfo={userInfo} onLogout={onLogout} className={"hidden md:flex md:order-3"} />
    </div>
  );
};

export default Navbar;
