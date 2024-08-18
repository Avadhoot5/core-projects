import React from 'react'

function WorkoutDetails({ title, reps, load, date}) {
    

  return (
    <div>
        <div className="workout-details">
            <h4>{title}</h4>
            <p><strong>Load (kg): </strong>{load}</p>
            <p><strong>Reps: </strong>{reps}</p>
            <p>{date}</p>
            {/* <p>{date.toString().trim('')}</p> */}
        </div>
    </div>
  )
}

export default WorkoutDetails;
