import React from 'react'
import Base from './Base'
import { Avatar, Box, Button, Container, CssBaseline, Grid, Link, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {useHistory} from 'react-router-dom';
import { URL } from '../App';
import axios from 'axios';
import { toast } from 'react-toastify';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="#">
          AUTH-App
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  
  const defaultTheme = createTheme();

const MailConfirm = () => {

    const history = useHistory();

    const handleSubmit = async(event) => {
      try {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let email = data.get('email');
        let res = await axios.post(`${URL}/users/forgot-password`, {
          email
          })
          if(res.status === 200){
            history.push('/')
            toast.success(res.data.message);
          }
      } catch (error) {
        toast.error(error.response.data.message);
      }
      };

  return (
    <Base>

    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Confirm Profile
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send Mail
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link onClick={()=>history.push("/")}
                style={{cursor:"pointer"}} variant="body2">
                  Remembered Password? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    <br/><br/>

    </Base>
  )
}

export default MailConfirm