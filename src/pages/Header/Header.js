import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';


const Header = () => {
return (
    <Box sx={{ 
            background:'url(images/sims-background.png)', 
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '80vh'
            }}
        >
    </Box>
    )
};

export default Header