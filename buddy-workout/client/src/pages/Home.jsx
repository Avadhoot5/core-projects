import {useEffect} from 'react'

import { BASE_URL } from '../App';
import WorkoutDetails from '../components/WorkoutDetails';
import Workoutform from '../components/Workoutform';
import { useWorkoutContext } from '../hooks/useWorkoutContext';

function Home() {

  const {workouts, dispatch} = useWorkoutContext();

  useEffect(() => {
    const init = async () => {
      try {
        const response = await fetch(`${BASE_URL}api/workouts`, {
          method: "GET",
        })
        const data = await response.json();
        if (response.ok) {
          dispatch({type: 'SET_WORKOUTS', payload: data})
        }
      }
      catch (e) {
        console.log(e.message);
      }
    }
    init();
  },[dispatch])
  
  return (
    <div className='home'>
      <div className="workouts">
        {workouts && workouts.map((value) => {
          return (<WorkoutDetails key = {value._id} 
          id = {value._id}
          title = {value.title}
          reps = {value.reps}
          load = {value.load}
          date = {value.createdAt}
          />)
      })}
      </div>
        <Workoutform/>

    </div>
  )
}


export default Home;