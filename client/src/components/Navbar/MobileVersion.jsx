import React from 'react'

/* ------------------------------- MATERIAL UI ------------------------------ */
import useStyles from './css/Navbar'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import SearchIcon from '@material-ui/icons/Search'
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline'

import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

import logoCorebiz from './image/Corebiz.png'

export const MobileVersion = ({ localCount }) => {
  const classes = useStyles()
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = 'primary-search-account-menu'

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <PersonOutlineIcon />
        </IconButton>
        <p>Mi Cuenta</p>
      </MenuItem>
    </Menu>
  )

  return (
    <div style={{ width: '100%', marginLeft: '75px' }} className={classes.grow}>
      <AppBar elevation={0} color='transparent' position="static">
      <MenuItem>
      <ViewHeadlineIcon />

      <Typography variant="h6" noWrap>
            <img src={ logoCorebiz } />
          </Typography>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={localCount} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </MenuItem>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <InputBase
                  placeholder="¿Qué estás buscando?"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
                <SearchIcon />
              </div>
            </div>
        <Toolbar>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>

            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <PersonOutlineIcon />
              <Typography variant="body2" noWrap>
                Mi Cuenta
              </Typography>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={localCount} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  )
}
