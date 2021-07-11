import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  container: {
    backgroundColor: '#F0F0F2',
    padding: '30px'
  },
  root: {
    margin: theme.spacing(2),
    width: '100%',
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column'
    },
    justifyContent: 'center'
  },
  inputs: {
    backgroundColor: 'white',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '25px'
    },
    marginRight: '10px'
  }
}))
