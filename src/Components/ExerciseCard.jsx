import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack,Typography } from '@mui/material'
const ExerciseCard = ({exercise}) => {
  return (
    <Link to={`exercise/${exercise.id}`} className='exercise-card'>
      <img src={exercise.gifUrl} alt={exercise.name}  loading='lazy'/>
      <Stack
      direction="row"
      >
        <Button sx={{ml:"20px", color:"#fff", background:"#ffa9a9",fontSize:"14px",textTransform:"capitalize", borderRadius:"20px"}}>
            {exercise.bodyPart}
        </Button>
        <Button sx={{ml:"20px", color:"#fff", background:"#fcc757",fontSize:"14px",textTransform:"capitalize", borderRadius:"20px"}}>
            {exercise.target}
        </Button>
      </Stack>
        <Typography fontSize="22px" ml="22px" color='#000' fontWeight="bold" textTransform="capitalize" pb="11px" mt="11px">
            {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard
