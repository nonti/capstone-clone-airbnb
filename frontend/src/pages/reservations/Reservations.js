import React, { useEffect, useState } from "react";
const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/api/reservations")
      .then((response) => response.json())
      .then((json) => setReservations(json))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <div className="table-content">
          {loading ? (
            <div>Loading...</div>

          ) : (
            <>
              <h1>My Reservations</h1>
              <table border={1}>
                <thead>
                  <tr>
                    <th>Booked by</th>
                    <th>Property</th>
                    <th>Checkin</th>
                    <th>Checkout</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.map((reservation) => (
                    <tr key={reservation.id}>
                      <td>{reservation.name}</td>
                      <td>{reservation.email}</td>
                      <td>{reservation.phone}</td>
                      <td>{reservation.address}</td>
                      <td>
                        <button className="delete">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
    </div>
  )
}

export default Reservations;