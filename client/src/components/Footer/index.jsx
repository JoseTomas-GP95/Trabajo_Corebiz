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
              <a className={classes.link} target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/josetgp/'>CONTÁCTANOS</a>
            </Button>

            <Button
              variant="contained"
              size="large"
              className={classes.button}
              startIcon={<HeadsetMicIcon />}
            >
              <a className={classes.link} target='_blank' rel='noreferrer' href='https://wa.me/5491150417339'>HABLA CON UN CONSULTOR</a>
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
