import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Accordions = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='text-[14px]'>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                sx={{
                    boxShadow: 'none',
                    border: 'none',
                    outline: 'none',
                }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    sx={{
                        padding: 0,
                    }}
                >
                    <span className='font-bold'>Tutorial</span>
                </AccordionSummary>
                <AccordionDetails sx={{
                    padding: 0,
                }}>
                    <ul className='space-y-4'>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{
                boxShadow: 'none',
                border: 'none',
                outline: 'none',
            }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                    sx={{
                        padding: 0,
                    }}
                >
                    <span className='font-bold'>Digital Marketing</span>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        padding: 0,
                    }}>
                    <ul className='space-y-4'>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{
                boxShadow: 'none',
                border: 'none',
                outline: 'none',
            }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    sx={{
                        padding: 0,
                    }}
                >
                    <span className='font-bold'>Web Development & Design</span>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        padding: 0,
                    }}>
                    <ul className='space-y-4'>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{
                boxShadow: 'none',
            }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    sx={{
                        padding: 0,
                    }}
                >
                    <span className='font-bold'>Insight Bisnis</span>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        padding: 0,
                    }}>
                    <ul className='space-y-4'>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={{
                boxShadow: 'none',
            }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                    sx={{
                        padding: 0,
                    }}
                >
                    <span className='font-bold'>News & Update</span>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        padding: 0,
                    }}>
                    <ul className='space-y-4'>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                    </ul>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Accordions