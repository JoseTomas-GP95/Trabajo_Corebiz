import React from 'react'

import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import { DesktopVersion } from './DesktopVersion'
import { MobileVersion } from './MobileVersion'

export const Navbar = ({ localCount }) => {
  const theme = useTheme()
  // Con matches puedo saber si el tamaño de la pantalla coincide o no con el tamaño sm
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <>
      {
        matches ? <MobileVersion localCount={localCount}/> : <DesktopVersion localCount={localCount}/>
      }
    </>
  )
}
