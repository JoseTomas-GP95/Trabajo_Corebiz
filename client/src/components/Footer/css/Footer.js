import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  footerContainer: {
    width: '97%',
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'space-around'
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
    justifyContent: 'space-around'
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'column'
  }
}))
