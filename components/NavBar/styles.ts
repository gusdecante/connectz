import styled from 'styled-components'
import { Divider, AppBar, Typography } from '@mui/material'
import Switch from '@mui/material/Switch'

export const CustomTypography = styled(Typography)`
  margin-left: 0.2em;
  color: #000000;
  opacity: 0.6;
  strong {
    color: #000;
  }
`

export const CustomDivider = styled(Divider)`
  border: 1px solid #2196f3;
  background-color: #2196f3;
  padding: 1px;
  margin: 8px 12px;
  height: 80px;
`

export const CustomAppBar = styled(AppBar)`
  background-color: white;
  color: #2196f3;
  border: none;
  box-shadow: none;

  input {
    border: 1px solid #2196f3;
    border-radius: 0.5em;
  }
`

export const SearchIconWrapper = styled.div`
  padding: 0.1em 0.5em;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`
