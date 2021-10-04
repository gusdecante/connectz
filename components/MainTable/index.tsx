import React, { useState, MouseEvent, ChangeEvent } from 'react';
import { useTheme } from '@mui/material/styles';
import { CustomSquareStyled, CustomTableContainer, CustomTable, CustomTableHead, CustomTableRow, CustomTableCell, CustomTableBody, CustomTableFooter, CustomTablePagination, CustomButton, ContainerButton } from './styles'
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import { rows } from './utils/data'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LastPageIcon from '@mui/icons-material/LastPage';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import Typography from '@mui/material/Typography'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

export default function MainTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [open, setOpen] = useState(false)

  const handleChangePage = (event: ChangeEvent<HTMLInputElement>, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <CustomSquareStyled>
      <Typography
      sx={{ mt: 0.5, ml: 2 }}
      color="text.secondary"
      display="block"
      variant="h6"
      >
      Cesta de compras
      </Typography> 
      <Typography
      sx={{ mt: 0.5, ml: 2 }}
      color="text.primary"
      display="block"
      variant="h4"
      >
      Cesta de compras
      </Typography> 
      <CustomTableContainer>
        <CustomTable>
          <CustomTableHead>
            <CustomTableRow>
              <CustomTableCell />
              <CustomTableCell>
                Produto
              </CustomTableCell>
              <CustomTableCell>Identificador</CustomTableCell>
              <CustomTableCell>Total Compra</CustomTableCell>
              <CustomTableCell>Qtd</CustomTableCell>
            </CustomTableRow>
          </CustomTableHead>
          <CustomTableBody>
            {(rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map((row) => (
              <span key={row.description}>
                <CustomTableRow>
                    <CustomTableCell>
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => setOpen(!open)}
                    >
                      {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                  </CustomTableCell>
                  <CustomTableCell component="th" scope="row">
                    <div>
                      <img src="/assets/img/product.jpg" alt="" />
                      <span>{row.description}</span>
                    </div>
                  </CustomTableCell>
                  <CustomTableCell component="th" scope="row">
                    {row.identifier}
                  </CustomTableCell>
                  <CustomTableCell component="th" scope="row">
                    {row.total}
                  </CustomTableCell>
                  <CustomTableCell component="th" scope="row">
                    {row.quantity}
                  </CustomTableCell>
                </CustomTableRow>
              </span>
            ))
            
            }
          </CustomTableBody>

          <CustomTableFooter>
            <CustomTableRow>
              <CustomTablePagination 
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'Linhas por página',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </CustomTableRow>
          </CustomTableFooter>
        </CustomTable>
        <ContainerButton>
          <CustomButton variant="contained">Finalizar Todos os Pedidos</CustomButton>
        </ContainerButton>
      </CustomTableContainer>
    </CustomSquareStyled>
  );
}

