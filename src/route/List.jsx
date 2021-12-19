import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const columns = [
  { field: 'name', headerName: 'Name', width: 500 },
  { field: 'createDate', headerName: 'Created Date', width: 165 },
  { field: 'url', headerName: 'Github Repo Url', width: 200 },
];


export default function ListComponent(data) {
    const [open, setOpen] = React.useState(false)
    const [row, setRow] = React.useState({})
    const rows = data?.data?.map((d,i)=>Object.assign({
        id:i,
        name:d.name,
        createDate:d.createdAt,
        url:d.url
    }))
    const clicked = (event)=>{
        console.log(event)
      setOpen(true)
      setRow(event.row)
    }
    const handleClose = () => {
        setOpen(false)
      };
    
  return (
    <>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        onRowClick={clicked}
      />
    </div>
    <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {row.name}
            </Typography>
        
          </Toolbar>
        </AppBar>
        <List>
          <ListItem>
            <ListItemText primary="Repository Name" secondary={row.name} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Created Date" secondary={row.createDate} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Repository Url" secondary={<a href={row.url} rel="noreferrer" target={'_blank'}>{row.url}</a>} />
          </ListItem>
        </List>
      </Dialog>
    </>
  );
}
