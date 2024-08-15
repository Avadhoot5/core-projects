import React from 'react'

function WorkoutDetails({ title, reps, load }) {
    

  return (
    <div>
        <div className="workout-details">
            <h4>{title}</h4>
            <p><strong>Load (kg): </strong>{load}</p>
            <p><strong>Reps: </strong>{reps}</p>
        </div>
    </div>
  )
}

export default WorkoutDetails;
