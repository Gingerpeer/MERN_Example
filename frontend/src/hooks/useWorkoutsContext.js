import { WorkoutContext } from "../context/WorkoutContext";
import { useContext } from "react";

// we use a hook to ensure robustness of program
export const useWorkoutContext = () => {
  const context = useContext(WorkoutContext)

  if(!context){
    throw Error('useWorksContext must be used inside an WorkoutsContextProvider')
  }

  return context
}