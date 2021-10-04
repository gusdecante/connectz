import styled from 'styled-components'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';

export const CustomList = styled(List)`
    /* width: '100%', maxWidth: 360, bgcolor: 'background.paper'  */
    width: 100%;
    max-width: 360;
    background-color: white;
    border-radius: 1.5em;
    margin-left: 1em;
`

export const CustomListItemText = styled(ListItemText)`
    margin-left: .5em;
`

export const CustomListItem = styled(ListItem)`
    color: #2196f3;
    margin: 1em 0 1em .7em;
    /* margin-left: .7em; */

    > svg {
        stroke: #2196f3;
    }
`