import React from 'react'
import { BASE_URL } from '../App'
import { useWorkoutContext } from '../hooks/useWorkoutContext'

function WorkoutDetails({ id, title, reps, load, date}) {

  const {dispatch} = useWorkoutContext();

  const handleClick = async () => {
    try {
      const response = await fetch(`${BASE_URL}api/workouts/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
          }
        }
      )
      const data = await response.json();
      if (response.ok) {
        dispatch({type: 'DELETE_WORKOUT', payload: data})
      }
    } catch (error) {
      console.log(error.mssg);
    } 
  }

  return (
    <div>
        <div className="workout-details">
            <h4>{title}</h4>
            <p><strong>Load (kg): </strong>{load}</p>
            <p><strong>Reps: </strong>{reps}</p>
            <p>{date}</p>
            <span onClick={handleClick}>Delete</span>
            {/* <p>{date.toString().trim('')}</p> */}
        </div>
    </div>
  )
}

export default WorkoutDetails;
