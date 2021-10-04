import React from 'react'
import { Grid } from '@mui/material'
import { NavBar, AsideList, MainTable } from '../index'
import { CustomGridContainer, CustomTypography } from './styles'

export default function(){
    return(
        <CustomGridContainer container spacing={2}>
            <Grid item xs={12}>
              <NavBar />
            </Grid>
            <Grid item xs={3}>
                <AsideList />
            </Grid>
            <Grid item xs={9}>
                <MainTable />
                <CustomTypography variant='subtitle1'>
                    &copy; 2021 Todos os direitos reservados por StudioZ
                </CustomTypography>
            </Grid>
        </CustomGridContainer>
    )
}