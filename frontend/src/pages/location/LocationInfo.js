import React, { useState, useEffect} from 'react';
    import { useLocation, useParams } from 'react-router-dom';
    import axios from 'axios';
    import './LocationInfo.css';
    

const LocationInfo = () => {
  
    
    
      const { state } = useLocation(); // Get the state from the Link component
      const { id } = useParams(); // Get the location ID from the URL params
      const [location, setLocation] = useState(state?.location); // Initialize with state if available
    
        // Fetch location data using the ID if the state is not available
        useEffect(() => {
          if (!state?.location) {
            // State is not available, fetch the location data from the API
            const fetchLocation = async () => {
              try {
                const response = await axios.get(`http://localhost:5000/api/accommodations/${id}`);
                setLocation(response.data);
              } catch (error) {
                console.error("Error fetching location data:", error);
              }
            };
            fetchLocation();
          }
        }, [id, state]);
      
    
    
      // Check if location data is available, if not, display an error message
      if (!location) {
        return <h2>Location data not found. Please go back and select a location.</h2>;
      }
    
       // Destructure location properties
      const {
        images,
        type,
        location: loc,
        guests,
        bedrooms,
        bathrooms,
        amenities,
        rating,
        reviews,
        price,
        title,
        description,
        cleaningFee,
        serviceFee,
        occupancyTaxes,
      } = location;
    
      return (
        <div className="location-info">
          <h1>{title}</h1>
          <h2>{type} in {loc}</h2>
          <div className="details-container">
            <img src={`http://localhost:5000/${images[0]}`} alt={title} className="main-image" />
            <div className="details">
              <h3>Details</h3>
              <p>{description}</p>
              <p>Guests: {guests}</p>
              <p>Bedrooms: {bedrooms}</p>
              <p>Bathrooms: {bathrooms}</p>
              <p>Amenities: {amenities.join(', ')}</p>
              <p>Rating: {rating} ({reviews} reviews)</p>
            </div>
          </div>
          <div className="cost-calculator">
            <h3>Cost Breakdown</h3>
            <p>Price per night: ${price}</p>
            <p>Cleaning Fee: ${cleaningFee}</p>
            <p>Service Fee: ${serviceFee}</p>
            <p>Occupancy Taxes: ${occupancyTaxes}</p>
            <h4>Total: ${(price + cleaningFee + serviceFee + occupancyTaxes).toFixed(2)}</h4>
            <button className="reserve-button">Reserve Now</button>
          </div>
        </div>
      );
    };
    
   

export default LocationInfo