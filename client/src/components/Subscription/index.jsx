import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch'
    }
  }
}))

export const Subscription = () => {
  const classes = useStyles()

  return (
    <div>
      <h3>¡Únete a nuestras novedades y promociones!</h3>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Ingresa tu nombre" variant="outlined" />
        <TextField id="outlined-basic" label="Ingresa tu mail" variant="outlined" />
        <Button variant="contained" color="primary">
          Suscribirse
        </Button>
      </form>
    </div>
  )
}
