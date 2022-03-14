import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Collapse = () => {
    return (
        <div>
            <Accordion sx={{
                padding: 0,
                boxShadow: 'none',
            }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                        padding: 0,
                    }}
                >
                    <Typography sx={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                    }}>Daftar Isi</Typography>
                </AccordionSummary>

                <AccordionDetails
                    sx={{
                        padding: 0,
                    }}>
                    <ul className='font-bold text-[12px] space-y-[24px] mt-6'>
                        <li className='space-y-[20px]'>
                            <a href="#" className='text-hoster-blue'>Cara Cek IP Hosting</a>
                            <ul className='ml-4 space-y-[20px]'>
                                <li><a href="#" className='text-hoster-blue'>Melihat IP Hosting pada email informasi akun hosting</a></li>
                                <li><a href="#" className='hover:text-hoster-blue'>Melihat IP Hosting melalui Member Area Niagahoster</a></li>
                                <li><a href="#" className='hover:text-hoster-blue'>Melihat IP Hosting melalui cPanel</a></li>
                                <li><a href="#" className='hover:text-hoster-blue'>Melihat IP menggunakan CMD</a></li>
                                <li><a href="#" className='hover:text-hoster-blue'>Melihat IP dengan web-based tools</a></li>
                            </ul>
                        </li>
                        <li><a href="#" className='hover:text-hoster-blue'>Kesimpulan</a></li>
                    </ul>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Collapse