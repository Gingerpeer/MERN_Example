import { useEffect, useState } from 'react';
// pages and components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm';

const Home = () =>{
  const [workouts,setWorkouts] = useState(null)

  useEffect(()=>{
    const fetchWorkouts = async () =>{
      const response = await fetch('/api/workouts')
      const json = await response.json()

      if(response.ok){
        setWorkouts(json)
      }
    }

    fetchWorkouts()
    // the empty array makes it so that the useEffect only renders once
  }, [])
  return(
    <div className="home">
      <div className='workouts'>
        {workouts && workouts.map((workout)=>(
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}
export default Home