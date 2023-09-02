/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React,{useEffect,useState} from 'react'
import  Pagination from '@mui/material/Pagination'
import {Stack,Box,Typography} from "@mui/material"
import ExerciseCard from './ExerciseCard'
import { fetchData,exerciseOptions } from '../utils/FatchData'
const Exercises = ({exercises, setExercises, bodyPart}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 9;

  const indexOffLastExercise= currentPage *  exercisesPerPage;
  const indexOffFirstExercise = indexOffLastExercise - exercisesPerPage

  const currentExercises = exercises.slice(indexOffFirstExercise, indexOffLastExercise)
  // console.log(currentExercises);
  const Paginate = (e,value)=>{
  setCurrentPage(value)

  window.scrollTo({top:1800, behavior:"smooth"})
  }

  useEffect(() => {
  const fetchExercisesData = async()=>{
    let exercisesData = []
    if (bodyPart === "all") {
      exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
    }else{
      exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
    }
    setExercises(exercisesData)
  }
  fetchExercisesData()
  }, [bodyPart])
  
  return (
    <Box
    id="exercises"
    sx={{mt:{lg:"110px"}}}
    mt="50px"
    p="20px"
    >
      <Typography variant='h3' mb="40px" >Showing Results</Typography>

      <Stack direction="row" sx={{gap:{lg:"110px", xs:"50px"}}} justifyContent="center" flexWrap="wrap">
        {currentExercises.map((exercise,index)=>(
          <ExerciseCard key={index} exercise={exercise}/>
        ))}
      </Stack>
      <Stack alignItems="center" mt="100px"> 
          {exercises.length > 9 &&(
            <Pagination
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length/exercisesPerPage)}
            page={currentPage}
            onChange={Paginate}
            size='large'
            />
          )}
      </Stack>
    </Box>
  )
}

export default Exercises