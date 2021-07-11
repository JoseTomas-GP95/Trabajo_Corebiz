import React from 'react'

/* ------------------------------- MATERIAL UI ------------------------------ */
import useStyles from './css/ProductCard'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { Stars } from '../Stars'

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
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
    [theme.breakpoints.down('xs')]: {
      padding: '13px 80px'
    },
    margin: theme.spacing(1)
  }
}))

export const ProductCard = ({ item, handleCounter }) => {
  const classes = useStyles()
  const classess = useStyless()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            align="center"
            color="textSecondary"
            variant="body2"
            component="p"
          >
            {item.productName}
          </Typography>
          <Typography
            align="center"
            variant="body2"
            color="textSecondary"
            component="p"
          >
            <Stars stars={item.stars} />
          </Typography>
          <Typography
            align="center"
            color="textSecondary"
            variant="body2"
            component="p"
          >
            de ${item.listPrice}
          </Typography>
          <Typography variant="h5" color="textPrimary" component="p">
            por $ {item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <BootstrapButton
            variant="contained"
            color="primary"
            disableRipple
            className={classess.margin}
            onClick={handleCounter}
          >
            COMPRAR
          </BootstrapButton>
        </div>
      </CardActions>
    </Card>
  )
}
