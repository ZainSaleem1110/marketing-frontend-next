import * as React from 'react';
import Box from '@mui/material/Box';
import Navbar from '../../Component/Navbar'
import styled from "@emotion/styled";
import Grid from '@mui/material/Grid';
import Image from 'next/image'
import Img1 from '../../assets/about.svg'
import TeamImg from '../../assets/team.svg'
import Footer from '../../Component/Footer'
import { AiOutlineArrowRight } from 'react-icons/ai'

const P = styled.p(
  {
    fontSize: 24
  },
);

const H1 = styled.h1(
  {
    fontSize: 48,
  }
);

const Team = styled.div(
  {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  }
);


const TeamMemberCard = styled.div(
  {
    width: "160px",
    height: "237",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
)

const TeamMemberImage = styled.div(
  {
    width: "160px",
    height: "160px",
    borderRadius: "50%",
  }
)


const TeamMemberRole = styled.p(
  {
    fontSize: 20
  }
)

const News = styled.div(
  {
    width: "100%",
  }
)

export default function About() {
  return (
    <Box sx={{ width: "100%", }}>
      <Navbar />
      <Box sx={{ py: 8 }} className="sm:px-10 px-4">
        <Grid container spacing={5}>
          <Grid item md={7} xs={12} >
            <P>About VTVL</P>
            <H1>The journey to a successful token starts here</H1>
            <P className="mt-3">The core tenant of any web3 project is a token which makes launching and managing your token more crucial than ever.</P>
            <P className="mt-3">That is why we’re all about building better tools for web3 founders - starting with token vesting and cap table management solutions. Ultimately, we want to be the go-to platform to help web3 companies take-off and launch successfully, in a seamless, efficient manner.</P>
            <P className="mt-3">Our team have personally experienced the pain points from both the founder’s and investor’s perspective which is why we feel empowered to change the landscape for the next generation of crypto-native companies.</P>
            <Box sx={{ mt: 16 }}>
              <H1>Team</H1>
              <P className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in vestibulum turpis. Aenean efficitur leo sit amet sapien mattis, non imperdiet est ultricies. Maecenas facilisis, urna in efficitur egester.</P>
            </Box>
          </Grid>
          <Grid item md={4} xs={12} className="flex justify-center">
            <Image src={Img1} alt="" />
          </Grid>
        </Grid>
        <Box sx={{ mt: 10 }}>
          <Team className="gap-14">
            <TeamMemberCard>
              <TeamMemberImage>
                <Image src={TeamImg} className="w-[160px] h-[160px] rounded-full" alt="" />
              </TeamMemberImage>
              <P className="text-[#673A58] text-center mt-1">Name</P>
              <TeamMemberRole>Role</TeamMemberRole>
            </TeamMemberCard>
            <TeamMemberCard>
              <TeamMemberImage>
                <Image src={TeamImg} className="w-[160px] h-[160px] rounded-full" alt="" />
              </TeamMemberImage>
              <P className="text-[#673A58] text-center mt-1">Name</P>
              <TeamMemberRole>Role</TeamMemberRole>
            </TeamMemberCard>
            <TeamMemberCard>
              <TeamMemberImage>
                <Image src={TeamImg} className="w-[160px] h-[160px] rounded-full" alt="" />
              </TeamMemberImage>
              <P className="text-[#673A58] text-center mt-1">Name</P>
              <TeamMemberRole>Role</TeamMemberRole>
            </TeamMemberCard>
            <TeamMemberCard>
              <TeamMemberImage>
                <Image src={TeamImg} className="w-[160px] h-[160px] rounded-full" alt="" />
              </TeamMemberImage>
              <P className="text-[#673A58] text-center mt-1">Name</P>
              <TeamMemberRole>Role</TeamMemberRole>
            </TeamMemberCard>
            <TeamMemberCard>
              <TeamMemberImage>
                <Image src={TeamImg} className="w-[160px] h-[160px] rounded-full" alt="" />
              </TeamMemberImage>
              <P className="text-[#673A58] text-center mt-1">Name</P>
              <TeamMemberRole>Role</TeamMemberRole>
            </TeamMemberCard>
          </Team>
          <News className="my-20">
            <H1>News</H1>
            <P className="mt-3 flex gap-x-2 items-center"><AiOutlineArrowRight /> VTVL raises a XX Series A from XXX and opens sign up access (July 2022)</P>
            <P className="mt-3 flex gap-x-2 items-center"><AiOutlineArrowRight /> Blog post title Pellentesque felis massa, molestie non accumsan non (Mar 2022)</P>
            <P className="mt-3 flex gap-x-2 items-center"><AiOutlineArrowRight /> Ut at velit est. Interdum et malesuada fames ac (Jan 2022)</P>
          </News>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}