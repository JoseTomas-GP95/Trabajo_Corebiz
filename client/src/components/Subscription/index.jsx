import React from 'react'

/* ------------------------------- MATERIAL UI ------------------------------ */
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import useStyles from './css/Subscription'

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
