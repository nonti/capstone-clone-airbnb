import React from "react";
import "./Admin.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <>
      
      <div className="button-container">
        <Button variant="outlined" component={Link} to="/reservations">
          View Reservation
        </Button>
        <Button variant="outlined" component={Link} to="/listings">
          View Listing
        </Button>
        <Button variant="outlined" component={Link} to="/create-listing">
          Create Listing
        </Button>
      </div>
      <hr />
      <p className="hotel-list">My Hotel List</p>
      <hr />

      {/* Example of existing hotel listings */}
      <div className="img-container">
        <div className="img-content">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-872294280468339009/original/9ac867f1-ec81-498b-b356-4b52c402fb75.jpeg?im_w=720"
            alt="img"
          />
          <button className="update">Update</button>
          <button className="delete">Delete</button>
        </div>
        <div className="img-content-info">
          <p>3 bedrooms</p>
          <p><strong>Sandton Hotel</strong></p>
          <hr />
          <p>4-5 guests . 4 bath . 5 beds</p>
          <p>Wifi . Kitchen . Free parking</p>
          <hr />
          <p>
            Rating: {5.0} ⭐ ({150} reviews) <strong>$250</strong> /night
          </p>
        </div>
      </div>

      <div className="img-container">
        <div className="img-content">
          <img
            src="https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-6f3a0f5/www.decorilla.com/online-decorating/wp-content/uploads/2022/05/Airbnb-interior-designer-Lori-D-1024x768.jpeg"
            alt="img"
          />
          <button className="update">Update</button>
          <button className="delete">Delete</button>
        </div>
        <div className="img-content-info">
          <p>2 bedrooms</p>
          <p><strong>Beachfront</strong></p>
          <hr />
          <p>2 guests . 2 bath . 2 beds</p>
          <p>Wifi . Pool . Beach</p>
          <hr />
          <p>
            Rating: {5.0} ⭐ ({50} reviews) <strong>$350</strong> /night
          </p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Admin;