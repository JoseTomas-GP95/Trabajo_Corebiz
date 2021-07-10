import React from 'react'

/* ------------------------------- MATERIAL UI ------------------------------ */
import { Typography, AppBar, Toolbar, Container } from '@material-ui/core'
import useStyles from './css/Footer'
import GitHubIcon from '@material-ui/icons/GitHub'
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
      <Container maxWidth="xs">
        <h3>Ubicación</h3>

        <p>Avenida Andromeda, 2000. Bloco 6 e 8</p>
        <p>Alphavile SP</p>
        <p>brasil@corebiz.ag</p>
        <p>+55 11 3090 1039</p>

      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<EmailIcon />}
      >
        CONTÁCTANOS
      </Button>

      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<HeadsetMicIcon />}
      >
        HABLA CON UN CONSULTOR
      </Button>

        <div>
          <p>Desarrollado por</p>
          <img src={ logoCorebiz }/>

          <p>Powered by</p>
          <img src={ logoVtex }/>
        </div>
        <Toolbar className={classes.footerContainer}>
          <Typography>
            <a
              className={classes.link}
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/josetgp/"
            >
              © José Tomas González 2021
            </a>
          </Typography>
          <Typography>
            <a
              className={classes.link}
              target="_blank"
              rel="noreferrer"
              href="https://github.com/JoseTomas-GP95/movie-city"
            >
              Repository on <GitHubIcon />
            </a>
          </Typography>
          <Typography variant="body1" color="inherit">
            made with 💛💙❤️
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
