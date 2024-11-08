"use client"

import CunstomButton from '@/components/CustomButton';
import CustomLayout from '@/components/CustomLayout';
import { Grid2, Box, Typography, Paper } from '@mui/material';
import { styled, useMediaQuery } from '@mui/system';
import Head from 'next/head';
import Link from 'next/link';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';


const Section = styled(Box)({
  padding: '2rem 0',
textAlign: 'center',
});

export default function Home() {

  const matches = useMediaQuery('(max-width:500px)');

  return (
    <>
      <Head>
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
      </Head>
      <CustomLayout>
        <Section sx={{ mb: 5, backgroundColor: '#f5f7f8', borderRadius: '8px' }}>
          <Grid2 container spacing={2} justifyContent="center" alignItems="center" sx={{ mt: 4, p: 3 }}>
            <Grid2 size={{ xs: 12, md: 6 }} sx={{ mb: 3, px: 3 }}>
              <Typography variant="h1">
                Most important title on&nbsp;the page
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et&nbsp;condimentum ultricies.
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }} sx={{ borderRadius: '8px', overflow: 'hidden' }}>
              <LiteYouTubeEmbed
                id="dQw4w9WgXcQ" // Default none, id of the video or playlist
                title="YouTube Embed" // a11y, always provide a title for iFrames: https://dequeuniversity.com/tips/provide-iframe-titles Help the web be accessible ;)
              />
            </Grid2>
          </Grid2>
        </Section>
        <Section sx={{ mb: 5 }}>
          <Typography variant="h2" component="h2" gutterBottom sx={{ mb: 5 }}>
            Also very important title
          </Typography>
          <Grid2 container spacing={4} justifyContent="center">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Grid2 size={{ xs: 12, md: 4 }} key={item}>
                <Paper elevation={0} sx={{ p: '1rem', textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                  <Typography variant="h3">Title</Typography>
                  <Typography sx={{ maxWidth: 350, textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                </Paper>
              </Grid2>
            ))}
          </Grid2>
          <Link tabIndex={-1} href={"contact-us"}>
            <CunstomButton variant="contained" color="primary" sx={{ borderRadius: '8px', mt: 5 }}>Contact&nbsp;us</CunstomButton>
          </Link>
        </Section>
        <Section sx={{ backgroundColor: '#f5f7f8', py: '4rem', borderRadius: '8px' }}>
          <Typography variant="h3">Less important title</Typography>
          <Link tabIndex={-1} href={"contact-us"}>
            <CunstomButton variant="contained" color="primary" sx={{ borderRadius: '8px', mt: 2 }}>Contact&nbsp;us</CunstomButton>
          </Link>
        </Section>
      </CustomLayout>
    </>
  );
};