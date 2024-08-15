import {useState} from 'react'
import { BASE_URL } from '../App';

function Workoutform() {

    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);

    const sendData = {title, load, reps}

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${BASE_URL}api/workouts`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(sendData)
            })
            const data = await response.json();
            if (!response.ok) {
                setError(response.error)
                console.log(error);
            }
            if (response.ok) {
                setError(null);
                setTitle('');
                setLoad('');
                setReps('');
                console.log("Workout added sucessfully!");
            }

        } catch (error) {
            console.log(error.message);
        }

    }


  return (
    <div>
        <form className="create" onClick={handleSubmit}>

            <label>Title: </label>
            <input type="text"
            onChange={(e) => {
                setTitle(e.target.value);
            }} 
            value = {title}
            />
            <label>Load (in KG): </label>
            <input type="number"
            onChange={(e) => {
                setLoad(e.target.value);
            }} 
            value = {load}
            />
            <label>Reps: </label>
            <input type="number"
            onChange={(e) => {
                setReps(e.target.value);
            }} 
            value = {reps}
            />

            <button>Add Workout</button>
            {error && <div className='error'>{error}</div>}
        
        </form>
    </div>
  )
}


export default Workoutform;