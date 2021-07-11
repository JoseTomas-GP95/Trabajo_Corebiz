import React from 'react'
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'

export const Stars = (props) => {
  return (
    <Box mb={-1} borderColor="transparent">
      <Rating size='small' name="read-only" value={props.stars} readOnly />
    </Box>
  )
}
