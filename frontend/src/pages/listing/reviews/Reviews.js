import React from "react";
import "./Reviews.css";
import SmokingRoomsIcon from "@mui/icons-material/SmokingRooms";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PetsIcon from "@mui/icons-material/Pets";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import FireExtinguisherIcon from "@mui/icons-material/FireExtinguisher";
import SanitizerIcon from "@mui/icons-material/Sanitizer";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import PolicyIcon from "@mui/icons-material/Policy";

const Reviews = () => {
  const ratings = [
    { category: "Cleanliness", score: 5.0, total: 7 },
    { category: "Accuracy", score: 5.0 },
    { category: "Communication", score: 5.0 },
    { category: "Location", score: 4.9 },
    { category: "Check-in", score: 5.0 },
    { category: "Value", score: 4.7 }
  ];

  const reviews = [
    {
      name: "Jose",
      date: "December 2021",
      text: "Host was very attentive.",
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg" // Random picture for Jose
    },
    {
      name: "Luke",
      date: "December 2021",
      text: "Nice place to stay!",
      profilePic: "https://randomuser.me/api/portraits/men/2.jpg" // Random picture for Luke
    },
    {
      name: "Shayna",
      date: "November 2021",
      text: "Wonderful neighborhood, easy access to restaurants and the subway, cozy studio apartment with a super comfortable bed. Great host, super helpful and responsive. Cool murphy bed...",
      profilePic: "https://randomuser.me/api/portraits/women/1.jpg" // Random picture for Shayna
    },
    {
      name: "Josh",
      date: "November 2021",
      text: "Well designed and fun space, neighborhood has lots of energy and amenities.",
      profilePic: "https://randomuser.me/api/portraits/men/3.jpg" // Random picture for Josh
    },
    {
      name: "Vladko",
      date: "January 2022",
      text: "This is an amazing place. It has everything one needs for a monthly business stay. Very clean and organized place. Amazing hospitality affordable price.",
      profilePic: "https://randomuser.me/api/portraits/men/4.jpg" // Random picture for Vladko
    },
    {
      name: "Jennifer",
      date: "November 2020",
      text: "A centric place, near a sub station and a supermarket with everything you need.",
      profilePic: "https://randomuser.me/api/portraits/women/2.jpg" // Random picture for Jennifer
    }
  ];
  

  // New cities and unique stays options
  const cities = [
    "Paris",
    "Nice",
    "Lyon",
    "Marseille",
    "Lille",
    "Aix-en-Provence",
    "Rouen",
    "Amiens",
    "Toulouse",
    "Montpellier",
    "Dijon",
    "Grenoble",
    "Bordeaux"
  ];

  const uniqueStays = [
    "Beach House Rentals",
    "Camper Rentals",
    "Glamping Rentals",
    "Treehouse Rentals",
    "Cabin Rentals",
    "Tiny House Rentals",
    "Lakehouse Rentals",
    "Mountain Chalet Rentals"
  ];

  return (
    <div className="reviews-container">
      <div className="ratings-summary">
        <h2>Overall Ratings</h2>
        <div className="ratings-list">
          {ratings.map((rating, index) => (
            <div className="rating-item" key={index}>
              <span className="rating-category">{rating.category}</span>
              <span className="rating-score">{rating.score}</span>
              <span className="rating-stars">
                {"★".repeat(rating.score)}
                {"☆".repeat(5 - rating.score)}
              </span>
              {rating.total && (
                <span className="rating-total">({rating.total} reviews)</span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="individual-reviews">
        <h2>Reviews</h2>
        {reviews.map((review, index) => (
          <div className="review-item" key={index}>
            <img
              src={review.profilePic}
              alt={`${review.name}'s profile`}
              className="profile-pic"
            />
            <div className="review-content">
              <h3>{review.name}</h3>
              <span className="review-date">{review.date}</span>
              <p className="review-text">{review.text}</p>
            </div>
          </div>
        ))}
        <button className="show-all-reviews-button">Show all 12 reviews</button>
      </div>
      <hr />

      {/* Things to Know Section */}
      <div className="things-to-know-section">
        <h2>Things to Know</h2>
        <div className="things-to-know-categories">
          {/* House Rules */}
          <div className="category">
            <h3>House Rules</h3>
            <ul>
              <li>
                <SmokingRoomsIcon className="icon" /> No smoking
              </li>
              <li>
                <EventAvailableIcon className="icon" /> No parties or events
              </li>
              <li>
                <AccessTimeIcon className="icon" /> Check-in time is 3 PM – 10
                PM
              </li>
              <li>
                <PetsIcon className="icon" /> Pet-friendly
              </li>
              <li>
                <LocalBarIcon className="icon" /> Quiet hours: 10 PM – 7 AM
              </li>
            </ul>
          </div>

          {/* Health & Safety */}
          <div className="category">
            <h3>Health & Safety</h3>
            <ul>
              <li>
                <MedicalServicesIcon className="icon" /> First-aid kit available
              </li>
              <li>
                <FireExtinguisherIcon className="icon" /> Fire extinguisher
                on-site
              </li>
              <li>
                <SanitizerIcon className="icon" /> Follow COVID-19 safety
                guidelines
              </li>
              <li>
                <ThermostatIcon className="icon" /> Temperature checks
              </li>
              <li>
                <ReportProblemIcon className="icon" /> Carbon monoxide alarm
              </li>
            </ul>
          </div>
          {/* New Cancellation Policy Section */}
          <div className="category">
            <h3>Cancellation Policy</h3>
            <ul>
              <li>
                <PolicyIcon className="icon" /> Free cancellation within 48
                hours of booking
              </li>
              <li>
                <PolicyIcon className="icon" /> Cancel up to 5 days before
                check-in for a full refund
              </li>
              <li>
                <PolicyIcon className="icon" /> No refund if canceled within 5
                days of check-in
              </li>
              <li>
                <PolicyIcon className="icon" /> Strict check-in and check-out
                times apply
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Explore Other Options Section */}
      <div className="explore-options-section">
        <h2>Explore Other Options in France</h2>
        <div className="options-categories">
          <div className="category">
            <h3>Cities</h3>
            <ul>
              {cities.map((city, index) => (
                <li key={index}>{city}</li>
              ))}
            </ul>
          </div>

          <div className="category">
            <h3>Unique Stays on Airbnb</h3>
            <ul>
              {uniqueStays.map((stay, index) => (
                <li key={index}>{stay}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Reviews;