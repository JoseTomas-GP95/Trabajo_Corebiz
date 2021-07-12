import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  footerContainer: {
    width: '97%',
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column'
    }
  },
  footerAddress: {
    marginLeft: '-4.2rem'
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  button: {
    marginBottom: '25px'
  },
  logosContainer: {
    width: '25%',
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginBottom: '30px'
    }
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  link: {
    textDecoration: 'none',
    color: 'black'
  }
}))
