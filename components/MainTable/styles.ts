import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TableFooter, TablePagination, Button } from '@mui/material'
import styled from 'styled-components'

export const ContainerFlex = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    div + div {
        align-self: flex-end;
        svg {
            margin: 0 .4em;
        }
    }
`

export  const StyledImage = styled.img``

export const ContainerButton = styled.div`
    align-self: flex-end;
    margin: 1em 0;
`

export const CustomButton = styled(Button)`
    margin: .5em 0;
    padding: 1em 2em;
`

export const CustomSquareStyled = styled.div`
    max-width: 70vw;
    margin: 0 2em;
`

export const CustomTableContainer = styled(TableContainer)`
    margin-top: 1em;
    padding: 1.5em 2em;
    border: .1em solid lightgray;
    border-radius: 1.5em;   
    box-shadow: 2px 1px 8px 2px #ddd;

    display: flex;
    flex-direction: column;
    background-color: white;
`
export const CustomTable = styled.table`
    border: .1em solid lightgray;
    border-radius: 2em;
    box-shadow: 2px 1px 8px 2px #ddd;
`
export const CustomTableHead = styled(TableHead)``
export const CustomTableRow = styled(TableRow)`` 
export const CustomTableCell = styled(TableCell)`
    img {
        width: 100px;
        height: 110px;
        margin-right: 1em;
    }

    div {
        display: flex;
        align-items: center;

    }
`
export const CustomTableBody = styled(TableBody)``
export const CustomTableFooter = styled(TableFooter)``
export const CustomTablePagination = styled(TablePagination)`
    border: none;
`
// export { TablePagination as CustomTablePagination }