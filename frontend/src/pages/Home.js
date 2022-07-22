import { useEffect } from 'react';
import { useWorkoutContext } from '../hooks/useWorkoutsContext';
import { useAuthContext } from '../hooks/useAuthContext'
// pages and components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm';

const Home = () =>{
  // context instead of state
  const { workouts, dispatch } = useWorkoutContext()
  const {user} = useAuthContext()

  useEffect(()=>{
    const fetchWorkouts = async () =>{
      const response = await fetch('/api/workouts', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
      const json = await response.json()

      if(response.ok){
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }
    // fetching data only if user is true
    if(user){
      fetchWorkouts()
    }
    // the empty array makes it so that the useEffect only renders once
  }, [dispatch,user])
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