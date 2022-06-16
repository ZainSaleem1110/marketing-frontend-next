import React from 'react'
import Box from '@mui/material/Box';
import Image from 'next/image'
import Logo from '../assets/logo.svg'
import Button from '@mui/material/Button';

function Navbar() {
    return (
        <Box sx={{ width: "100%", p: 2 }} className="flex sm:flex-row flex-col justify-between items-center">
            <Box className="flex items-center">
                <Image src={Logo} alt="" />
                <Box sx={{ height: 20, color: '#737373', fontSize: 12, textAlign: "center" }} className="bg-[#DFDFDF] rounded-full px-4">
                    PRIVATE BETA
                </Box>
            </Box>
            <Box className="flex items-center gap-x-5">
                <Button variant="text" className="text-[#673A58] font-bold">About</Button>
                <Button variant="contained" className="bg-[#673A58] text-white">Join our waitlist</Button>
            </Box>
        </Box>
    )
}

export default Navbar
