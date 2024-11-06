"use client"

import CunstomButton from '@/components/CustomButton';
import CustomLayout from '@/components/CustomLayout';
import { Button, TextField, Typography, Paper } from '@mui/material';
import { Container, styled } from '@mui/system';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const FormContainer = styled(Paper)({
  padding: '2rem',
  marginTop: '2rem',
  maxWidth: '400px',
  margin: 'auto',
  backgroundColor: '#fff',
  borderRadius: '8px',
});

type Inputs = {
  name: string
  email: string
  message: string
}

export default function ContactPage() {

  const [contactsData, setContactsData] = useState<Inputs | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | undefined>(undefined);
  console.log(successMsg)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setContactsData({ ...data })
  }

  useEffect(() => {
    if (!contactsData) return
    fetch(`https://functions.yandexcloud.net/d4eo4pnc96oovfhiuc6s?name=${contactsData.name}&email=${contactsData.email}&message=${contactsData.message}`)
      .then((response) => response.json())
      .then((data) => {
        setSuccessMsg(data.success)
      })
      .catch((error) => console.log(error));
  }, [contactsData]);

  return (
    <>
      <Head>
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
      </Head>
      <CustomLayout>
        <Container sx={{
          padding: '3rem 0 3rem',
          justifyContent: 'center',
          textAlign: 'center',
          mb: 4,
        }}>
          <Typography variant="h2" component="h2" sx={{ fontWeight: 'bold', mb: 3, mt: 1 }}>
            Only CTA on the page
          </Typography>
          <FormContainer elevation={3}>
            {successMsg !== undefined ?
              <Typography variant="h1">
                {successMsg}
              </Typography>
              :
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  {...register("name", { required: true, maxLength: 40, minLength: 2 })}
                  aria-invalid={errors.name ? "true" : "false"}
                  label="name"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                    },
                  }}
                />
                {errors.name?.type === "required" && (
                  <p role="alert">This field is required</p>
                )}
                {errors.name?.type === "maxLength" && (
                  <p role="alert">name must be at least 2 symlols</p>
                )}
                {errors.name?.type === "minLength" && (
                  <p role="alert">max name length must be less than 40 symlols</p>
                )}

                <TextField
                  {...register("email", { required: true, maxLength: 40, minLength: 2 })}
                  label="email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                    },
                  }}
                />
                {errors.email?.type === "required" && (
                  <p role="alert">This field is required</p>
                )}
                {errors.email?.type === "maxLength" && (
                  <p role="alert">name must be at least 2 symlols</p>
                )}
                {errors.email?.type === "minLength" && (
                  <p role="alert">max name length must be less than 40 symlols</p>
                )}

                <TextField
                  {...register("message")}
                  label="message"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  multiline
                  rows={4}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                    },
                  }}
                />

                <CunstomButton
                  type="submit"
                  variant="contained"
                  fullWidth
                  color="primary"
                  sx={{
                    marginTop: '1rem',
                    borderRadius: '8px',
                    backgroundColor: '#000',
                    color: '#fff',
                    '&:hover': { backgroundColor: '#333' },
                  }}
                >
                  Submit
                </CunstomButton>
              </form>
            }
          </FormContainer>
        </Container>
      </CustomLayout>
    </>
  );
};

