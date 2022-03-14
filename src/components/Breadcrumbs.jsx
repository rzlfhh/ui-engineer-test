import React from 'react'
import dataArtikel from "./DataArtikel";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
    event.preventDefault();
}

const Breadcrumbss = () => {

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick} sx={{ color: '#007DFF' }}>
            Home
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="#"
            onClick={handleClick}
            sx={{ color: '#007DFF' }}
        >
            Tutorial
        </Link>,
        <Link
            underline="hover"
            key="3"
            color="inherit"
            href="#"
            onClick={handleClick}
            sx={{ color: '#007DFF' }}
        >
            Hosting
        </Link>,
        <Typography key="4" color="text.primary" sx={{ fontSize: '12px' }}>
            {dataArtikel[0].title}
        </Typography>,
    ];

    return (
        <Stack spacing={2}>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
                sx={{
                    fontSize: '12px',
                }}
            >
                {breadcrumbs}
            </Breadcrumbs>
        </Stack>
    )
}

export default Breadcrumbss