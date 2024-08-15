import {useState, useEffect} from 'react'

import { BASE_URL } from '../App';
import WorkoutDetails from '../components/WorkoutDetails';
import Workoutform from '../components/Workoutform';


function Home() {

  const [workouts, setWorkouts] = useState(null);
  
  useEffect(() => {
    const init = async () => {
      try {
        const response = await fetch(`${BASE_URL}api/workouts`, {
          method: "GET",
          "Content-type": "application/json"
        })
        const data = await response.json();
        setWorkouts(data);
      }
      catch (e) {
        console.log(e.message);
      }
    }
    init();
  },[])
  

  return (
    <div className='home'>
      <div className="workouts">
        {workouts && workouts.map((value) => {
          return (<WorkoutDetails key = {value._id} 
          title = {value.title}
          reps = {value.reps}
          load = {value.load}
          />)
      })}
      </div>
        <Workoutform/>

    </div>
  )
}


export default Home;