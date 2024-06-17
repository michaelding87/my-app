import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.min.css';
import './Sessions.css'; // Custom styles for Sessions

function Sessions() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('/sessions.json')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div className="sessions-container">
      <h1 className="title">Sessions Page</h1>
      <p>This is a brief description of the sessions.</p>
      <table className="table is-striped is-hoverable">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Location</th>
            <th>Leader</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout, index) => (
            <tr key={index}>
              <td>{workout.date}</td>
              <td>{workout.time}</td>
              <td>{workout.location}</td>
              <td>{workout.leader}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Sessions;
