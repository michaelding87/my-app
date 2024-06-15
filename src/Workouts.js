import React, { useEffect, useState } from 'react';


function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('/workouts.json')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div>
      <h1>Workouts Page</h1>
      <p>This is a brief description of the workouts.</p>
      <table>
        <thead>
          <tr>
            <th>Equipment</th>
            <th>Focus</th>
            <th>Trainer</th>
            <th>Participants</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout, index) => (
            <tr key={index}>
              <td>{workout.equipment}</td>  
              <td>{workout.focus}</td>
              <td>{workout.trainer}</td>
              <td>{workout.participants}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Workouts;
