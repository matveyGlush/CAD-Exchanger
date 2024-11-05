"use client"

import CustomLayout from '@/components/CustomLayout';
import { Grid2, Box, Button, Typography, Paper } from '@mui/material';
import { styled, useMediaQuery } from '@mui/system';
import Head from 'next/head';
import Link from 'next/link';

const Section = styled(Box)({
  padding: '2rem 0',
  textAlign: 'center',
});

const ContentPage = () => {

  const matches = useMediaQuery('(max-width:500px)');

  return (
    <>
      <Head>
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:alt" content="About Acme" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <CustomLayout>
        <Section sx={{ mb: 5, backgroundColor: '#f5f7f8', borderRadius: '8px' }}>
          <Grid2 container spacing={2} justifyContent="center" alignItems="center" sx={{ mt: 4, p: 3 }}>
            <Grid2 size={{ xs: 12, md: 6 }} sx={{ mb: 3 }}>
              <Typography variant="h1">
                Most important title on&nbsp;the page
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et&nbsp;condimentum ultricies.
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }} sx={{}}>
              {/* <VideoPlaceholder> YouTube video </VideoPlaceholder> */}
              <iframe width={matches ? 280 : 400} height={matches ? 150 : 250} style={{ borderRadius: '8px' }}
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=btyGVFlMoDfKffwZ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
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
          <Link href={"contact-us"}>
            <Button variant="contained" color="primary" sx={{ borderRadius: '8px', mt: 5 }}>Contact&nbsp;us</Button>
          </Link>
        </Section>
        <Section sx={{ backgroundColor: '#f5f7f8', py: '4rem', borderRadius: '8px' }}>
          <Typography variant="h3">Less important title</Typography>
          <Link href={"contact-us"}>
            <Button variant="contained" color="primary" sx={{ borderRadius: '8px', mt: 2 }}>Contact&nbsp;us</Button>
          </Link>
        </Section>
      </CustomLayout>
    </>
  );
};

export default ContentPage;
