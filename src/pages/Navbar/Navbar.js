import React , {useState} from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Badge, Menu, MenuItem } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Box } from '@mui/system';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';


function Navbar() {
    const [anchorEl,setAnchorEl] = useState(null);

    const openMenu = Boolean(anchorEl)

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

  return (
    <Box elevation={2} sx={{backgroundColor:"white"}}>
        <Toolbar>
            <Box sx={{ display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center', padding: '10px 0px' }} component={'div'}>

                {/* Logo */}
                <Box>
                    <IconButton>
                        <MenuOutlinedIcon />
                    </IconButton>
                </Box>

                {/* Links */}
                <Box sx={{display:'flex'}}>
                    <Typography 
                        sx={{marginRight:'20px', cursor:'pointer', color:'#616161'}}
                        aria-controls='file'
                        aria-aria-haspopup="true"
                        aria-expanded={ openMenu ? 'true' : undefined }
                        onClick={handleClick}
                        >
                    File
                    </Typography>
                    {/*Dropdown Items*/}
                    <Menu id='file' anchorEl={anchorEl} open={openMenu} onClose={handleClose}>
                        <MenuItem onClick={handleClose} ><Link to='/store-stock'>Store Stock</Link></MenuItem>
                        <MenuItem onClick={handleClose} ><Link to='/bill-details'>Bill details</Link></MenuItem>
                        <MenuItem onClick={handleClose} ><Link to='/higherOfficial'>higher Official</Link></MenuItem>
                        <MenuItem onClick={handleClose} ><Link to='/OpPharmacyBilling'> OP Pharmacy Billing </Link> </MenuItem>
                        <MenuItem onClick={handleClose} ><Link to='/return'>IP Drug Returns</Link></MenuItem>
                        <MenuItem onClick={handleClose} ><Link to='/main_store'>Store</Link></MenuItem>
                        <MenuItem onClick={handleClose} ><Link to='/grn'>GRN (Goods Receiving Note)</Link></MenuItem>
                        <MenuItem onClick={handleClose} >Branch Issues</MenuItem>
                        <MenuItem onClick={handleClose} >Close Shift</MenuItem>
                        <MenuItem onClick={handleClose} >EXIT</MenuItem>
                        <MenuItem onClick={handleClose} >Department Returns</MenuItem>
                    </Menu>


                    <Typography sx={{marginRight:'20px', cursor:'pointer', color:'#616161'}}>Report</Typography>
                    <Typography sx={{marginRight:'20px', cursor:'pointer', color:'#616161'}}>Security</Typography>
                    <Typography sx={{marginRight:'20px', cursor:'pointer', color:'#616161'}}>Admin</Typography>
                    <Typography sx={{marginRight:'20px', cursor:'pointer', color:'#616161'}}>Return</Typography>
                    <Typography sx={{marginRight:'20px', cursor:'pointer', color:'#616161'}}>Help</Typography>
                    <Typography sx={{marginRight:'20px', cursor:'pointer', color:'#616161'}}>Windows</Typography>
                    <Typography sx={{marginRight:'20px', cursor:'pointer', color:'#616161'}}>Exit</Typography>
                    <Typography sx={{marginRight:'20px', cursor:'pointer', color:'#616161'}}>Maintenance</Typography>
                    <Typography sx={{marginRight:'20px', cursor:'pointer', color:'#616161'}}>Day Summary</Typography>

                    <Typography sx={{marginRight:'20px', cursor:'pointer', color:'#616161'}}><Link to='/medicine'> Create Medicine </Link></Typography>
                    <Typography sx={{marginRight:'20px', cursor:'pointer', color:'#616161'}}><Link to='/createuser'> Create User </Link></Typography>
                </Box>

                {/* button links*/}
                <Box sx={{ display:"flex", justifyContent:'center', alignItems:'center'}}>
                    <Button sx={{backgroundColor:'primary'}} disableElevation variant='contained'>Account</Button>
                    <IconButton>
                        <Badge>
                            <AccountCircleIcon color='primary' fontSize='large'/>  
                        </Badge>
                    </IconButton>
                </Box>
            </Box>
        </Toolbar>
    </Box>
  )
}

export default Navbar