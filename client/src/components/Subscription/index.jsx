import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
/* ------------------------------- MATERIAL UI ------------------------------ */
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import useStyles from './css/Subscription'

/* ------------------------------- HELPERS ------------------------------ */
import { helpNewsletter } from '../../helpers/Newsletter/helpNewsletter'

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
      helpNewsletter(newsletter)
        .then(response => setResponse(response))
    }
  }

  const classes = useStyles()
  return (
    <div>
      <h3>¡Únete a nuestras novedades y promociones!</h3>
      <form onSubmit={onSubmit}className={classes.root} noValidate autoComplete="off">
        <TextField name="name" value={name} onChange={ handleChange } id="outlined-basic" label="Ingresa tu nombre" variant="outlined" />
        <TextField name="mail" value={mail} onChange={ handleChange } id="outlined-basic" label="Ingresa tu mail" variant="outlined" />
        <Button type="submit" variant="contained" color="primary">
          Suscribirse
        </Button>
      </form>
      <button onClick={() => toast.success('🦄 Wow so easy!')}>click</button>
    </div>
  )
}
