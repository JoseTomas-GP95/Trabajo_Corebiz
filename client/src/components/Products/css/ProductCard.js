import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    height: 380,
    [theme.breakpoints.down('xs')]: {
      margin: 5
    },
    margin: 10
  },
  media: {
    height: 140
  },
  marginCard: {
    margin: 50
  }
}))
