import React from 'react'
import { BASE_URL } from '../App'
import { useWorkoutContext } from '../hooks/useWorkoutContext'
import { MdOutlineDeleteSweep } from "react-icons/md";
import {formatDistanceToNow} from "date-fns";
import { useAuthContext } from '../hooks/useAuthContext';

function WorkoutDetails({ id, title, reps, load, date}) {

  const {dispatch} = useWorkoutContext();
  const { user } = useAuthContext();

  const handleClick = async () => {

    if (!user)  {
      return
    }

    try {
      const response = await fetch(`${BASE_URL}api/workouts/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
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
            <p>{formatDistanceToNow(new Date(date), {addSuffix: true})}</p>
            <span>
              <MdOutlineDeleteSweep onClick={handleClick}
              style={{fontSize: '25px', justifySelf: 'center', width: '30px'}}/>
            </span>
        </div>
    </div>
  )
}

export default WorkoutDetails;
