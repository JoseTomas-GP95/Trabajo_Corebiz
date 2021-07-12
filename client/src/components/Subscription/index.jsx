import React, { useState, useEffect } from 'react'

/* ----------------------------- REACT TOASTIFY ----------------------------- */
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

/* ------------------------------- MATERIAL UI ------------------------------ */
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import useStyles from './css/Subscription'
import { Typography } from '@material-ui/core'
import { withStyles, makeStyles } from '@material-ui/core/styles'

/* ------------------------------- HELPERS ------------------------------ */
import { helpNewsletter } from '../../helpers/Newsletter/helpNewsletter'

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '14px 35px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: 'black',
    borderColor: '#2b2828',
    fontFamily: ['-apple-system'].join(','),
    '&:hover': {
      backgroundColor: '#2b2828'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'black',
      borderColor: '#2b2828'
    },
    '&:focus': {
      boxShadow: '#2b2828'
    }
  }
})(Button)

const useStyless = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(0)
  }
}))

export const Subscription = () => {
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [response, setResponse] = useState('')

  useEffect(() => {
    if (response.message !== null || response.message !== undefined) {
      if (response.message === 'Created successfully') {
        toast.success('Tu subscripción ha sido registrada con éxito ✔️')
        setName('')
        setMail('')
      } if (response.status === 'error') {
        console.log(response.message)
      }
    }
  }, [response])

  const handleChange = (event) => {
    if (event.target.name === 'name') {
      setName(event.target.value)
    } else {
      setMail(event.target.value)
    }
  }

  const onSubmit = (event) => {
    event.preventDefault()
    // Validando email y que el nombre no esté vacio o llenado sólo con espacios
    if (!mail.match(/\S+@\S+\.\S+/) || name.trim().length === 0) {
      toast.error('Revisa de nuevo tus datos por favor', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    } else {
      const newsletter = {
        name,
        mail
      }
      helpNewsletter(newsletter).then((response) => setResponse(response))
    }
  }

  const classes = useStyles()
  const classess = useStyless()
  return (
    <div className={classes.container}>
      <ToastContainer />

      <Typography
        align="center"
        variant="h5"
        color="textPrimary"
        component="p"
      >
        ¡Únete a nuestras novedades y promociones!
      </Typography>
      <form
        onSubmit={onSubmit}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <TextField
          className={classes.inputs}
          name="name"
          value={name}
          onChange={handleChange}
          id="outlined-basic"
          label="Ingresa tu nombre"
          variant="outlined"
        />
        <TextField
          className={classes.inputs}
          name="mail"
          value={mail}
          onChange={handleChange}
          id="outlined-basic"
          label="Ingresa tu mail"
          variant="outlined"
        />
        <BootstrapButton
          type="submit"
          variant="contained"
          color="primary"
          className={classess.margin}
        >
          Suscribirse
        </BootstrapButton>
      </form>
    </div>
  )
}
