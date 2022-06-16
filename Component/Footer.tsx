import * as React from 'react';
import styled from "@emotion/styled";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Image from 'next/image'
import Logo from '../assets/whiteLogo.svg'

const Footer = styled.div(
    {
        width: "100%",
        height: "250px",
        background: "#59354D",
        display: "flex",
        justifyContent: "center",
        flexDirection:"column",
        alignItems: "center",
    }
)

const FooterInner = styled.div(
    {
        width: "80%",
        height: "130px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        color:"white",
        borderBottom: "2px solid #F2EAE0"
    }
)

const FooterText = styled.p(
    {
        fontSize: 16
    }
);

const FooterEnd=styled.p(
    {
        fontSize:12,
        color:"#F2EAE0",
    }
)

export default function About() {
    return (
        <Footer>
            <FooterInner>
                <Box className="flex gap-x-3 items-center">
                    <Image src={Logo} className="h-[48px]" alt="" />
                    <FooterText>Currently in invite-only beta, join our waitlist here. </FooterText>
                </Box>
                <Box>
                    <FooterText>About VTVL</FooterText>
                </Box>
            </FooterInner>
            <Box sx={{width:"80%",mt:3}}>
                <FooterEnd>Terms  |  Privacy Policy</FooterEnd>
                <FooterEnd>© 2022 VTVL, Inc. All Rights Reserved.</FooterEnd>
            </Box>
        </Footer>
    );
}