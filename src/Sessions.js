import React from 'react';
import 'bulma/css/bulma.min.css';
import './Sessions.module.css';

function Sessions() {
  return (
    <div className="container">
      <h1 className="title">Sessions Page</h1>
      <p className="subtitle">This is the Sessions page.</p>
      <table>
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


