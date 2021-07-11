import React from 'react'
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'

export const Stars = ({ stars }) => {
  return (
    <Box component="fieldset" mb={-1} borderColor="transparent">
      <Rating size='small' name="read-only" value={stars} readOnly />
    </Box>
  )
}
