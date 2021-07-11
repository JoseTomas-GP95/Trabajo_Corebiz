import React from 'react'

/* ------------------------------- MATERIAL UI ------------------------------ */
import { AppBar, Toolbar } from '@material-ui/core'
import useStyles from './css/Footer'
import EmailIcon from '@material-ui/icons/Email'
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic'
import Button from '@material-ui/core/Button'

/* --------------------------------- IMAGES --------------------------------- */
import logoVtex from './image/logo-vtex.png'
import logoCorebiz from './image/logo-corebiz-global.svg'

export const Footer = () => {
  const classes = useStyles()
  return (
    <AppBar position="static" color="primary">

        <Toolbar className={classes.footerContainer}>
          <div className={classes.footerAddress}>
            <h2>Ubicación</h2>
            <p>Avenida Andromeda, 2000. Bloco 6 e 8</p>
            <p>Alphavile SP</p>
            <p>brasil@corebiz.ag</p>
            <p>+55 11 3090 1039</p>
          </div>

          <div className={classes.buttonContainer}>
            <Button
              variant="contained"
              size="large"
              className={classes.button}
              startIcon={<EmailIcon />}
            >
              CONTÁCTANOS
            </Button>

            <Button
              variant="contained"
              size="large"
              className={classes.button}
              startIcon={<HeadsetMicIcon />}
            >
              HABLA CON UN CONSULTOR
            </Button>
          </div>

          <div className={classes.logosContainer}>
            <div className={classes.logoContainer}>
              <p>Desarrollado por</p>
              <img src={ logoCorebiz }/>
            </div>
            <div className={classes.logoContainer}>
              <p>Powered by</p>
              <img src={ logoVtex }/>
            </div>
          </div>
        </Toolbar>
    </AppBar>
  )
}
