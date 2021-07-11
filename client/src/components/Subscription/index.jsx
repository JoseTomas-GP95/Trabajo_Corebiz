import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
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
      console.log('ENTRA')
      toast.success('🦄 Wow so easy!')
      if (response.message === 'Created successfully') {
        setName('')
        setMail('')
      } else {
        toast.error('🦄 Wow so easy!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
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

    if (!mail.match(/\S+@\S+\.\S+/)) {
      console.log('correo no valido')
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
