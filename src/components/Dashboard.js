import React, { useEffect } from 'react'
import Base from './Base'
import { CssBaseline, Grid, ThemeProvider, Typography, createTheme } from '@mui/material'
import { useHistory } from 'react-router-dom';


const defaultTheme = createTheme();

const Dashboard = () => {
    const history = useHistory();

  let token = sessionStorage.getItem('token');

  useEffect(()=>{
    if(!token) {
      sessionStorage.clear();
      history.push('/');
    }
  })
  return (
    <Base>
     <Typography component="h2" variant="h6" color="black" gutterBottom>
      Authentication Application
    </Typography>

    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={12}
          md={12}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        </Grid>
        </ThemeProvider>
    </Base>
  )
}

export default Dashboard