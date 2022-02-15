import { AppBar, Toolbar } from '@mui/material'
import { Box, styled } from '@mui/system'
import React from 'react'

const Main = styled('main')({
  background: '#282c34',
})

export type LayoutProps = {
  showToolbar?: boolean
}

const LayoutToolbar = () => (
  <AppBar sx={{ flex: 'none' }}>
    <Toolbar></Toolbar>
  </AppBar>
)

export const MainLayout: React.FC<LayoutProps> = (props) => {
  const { showToolbar = true, children } = props
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {showToolbar && <LayoutToolbar />}
      <Main sx={{ flex: 'auto' }}>{children}</Main>
    </Box>
  )
}
