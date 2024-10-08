import React, { useState, useEffect, useRef } from "react";
import SearchIcon from "@mui/icons-material/SearchRounded";
import "./SearchBox.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const SearchBox = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guestCount, setGuestCount] = useState(1);
  const [showGuestPopup, setShowGuestPopup] = useState(false);
  const [data, setData] = useState(undefined);
  const popupRef = useRef(null);
  const handleOnGuestChange = (operation) => {
    setGuestCount((prevCount) => {
      const newCount = operation === "increment" ? prevCount + 1 : prevCount - 1;
      return Math.max(1, Math.min(20, newCount));
    });
  };


  
  const location = [
    "All",
    "Pretoria",
    "Sandton",
    "Woodmead",
    "Hyde Park",
    "Port Elizabeth",
];
  const onOptionChangeHandler = (event) => {
    setData(event.target.value);
    
    };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowGuestPopup(false);
    }
  };

  useEffect(() => {
    if (showGuestPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showGuestPopup]);

  return (
    <div className="header-bottom">
    <div className="header-search">
      <div className="search-where">
        <div>Hotels</div>
        <div className="search-input">
        <select onChange={onOptionChangeHandler}>
            <option>Location</option>
            {location.map((option, index) => {
                return (
                    <option key={index}>
                        {option}
                    </option>
                );
            })}
        </select>
        </div>
      </div>
      <div className="border-divider"></div>
      <div className="search-checkin">
        <div>Check In</div>
        <div className="search-button">
        <DatePicker
          selected={checkInDate}
          onChange={(date) => setCheckInDate(date)}
          placeholderText="Add dates"
          className="date-picker"
        />
        </div>
      </div>
      <div className="border-divider"></div>
      <div className="search-checkout">
        <div>Check Out</div>
        <div className="search-button">
        <DatePicker
          selected={checkOutDate}
          onChange={(date) => setCheckOutDate(date)}
          placeholderText="Add dates"
          className="date-picker"
        />
        </div>
      </div>
      <div className="border-divider"></div>
      <div className="search-who">
          <p>
            Guests
          </p>
          <button
            className="search-button"
            onClick={() => setShowGuestPopup(true)}
          >
            {guestCount > 0 ? `${guestCount} Guest` : `${guestCount} Guest`}
          </button>
        </div>
        {showGuestPopup && (
          <div className="guest-popup" ref={popupRef}>
            <div className="guest-selector">
              <button
                className="guest-button"
                onClick={() => handleOnGuestChange("decrement")}
              >
                <RemoveIcon />
              </button>
              <input
                type="number"
                value={guestCount}
                readOnly
                className="guest-input"
              />
              <button
                className="guest-button"
                onClick={() => handleOnGuestChange("increment")}
              >
                <AddIcon />
              </button>
            </div>
          </div>
        )}
      <button className="search">
      <SearchIcon className="search-icon"  />
      </button>
    </div>
  </div>
  );
};

export default SearchBox;
