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
    justifyContent: 'center'
  },
  inputs: {
    marginRight: '10px'
  }
}))
